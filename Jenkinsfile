pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
        GITHUB_CREDENTIALS = credentials('github-creds')
        VPS_SSH = 'vps-ssh' // ID SSH key đã lưu trong Jenkins credentials
        DOCKERHUB_USER = 'phuonglam2507'
        VPS_IP = '13.211.214.166'  // Địa chỉ VPS
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Cloning source code from GitHub...'
                git branch: 'main', url: 'https://github.com/Lam99322/giutarshop.git', credentialsId: "${GITHUB_CREDENTIALS}"
            }
        }

        stage('Build Docker Images') {
            steps {
                echo '🐳 Building Docker images...'
                sh '''
                    docker build -t ${DOCKERHUB_USER}/giutarshop-frontend ./client
                    docker build -t ${DOCKERHUB_USER}/giutarshop-backend ./server
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                echo '⬆️ Pushing images to DockerHub...'
                timeout(time: 10, unit: 'MINUTES') {
                    sh '''
                        echo "${DOCKERHUB_CREDENTIALS_PSW}" | docker login -u "${DOCKERHUB_CREDENTIALS_USR}" --password-stdin
                        docker push ${DOCKERHUB_USER}/giutarshop-frontend
                        docker push ${DOCKERHUB_USER}/giutarshop-backend
                        docker logout
                    '''
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                echo '🚀 Deploying application on VPS...'
                sshagent([VPS_SSH]) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no ubuntu@${VPS_IP} "
                            set -e
                            cd ~/giutarshop || exit 1
                            echo '📥 Pulling latest code from GitHub...'
                            git pull origin main
                            echo '🧹 Stopping and cleaning old containers...'
                            docker-compose down || true
                            docker system prune -af
                            echo '🚀 Pulling latest images from DockerHub...'
                            docker pull ${DOCKERHUB_USER}/giutarshop-frontend
                            docker pull ${DOCKERHUB_USER}/giutarshop-backend
                            echo '🌍 Rebuilding and starting containers...'
                            docker-compose up -d
                        "
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully! Application deployed on VPS.'
        }
        failure {
            echo '❌ CI/CD Pipeline failed! Please check logs for details.'
        }
        always {
            echo '🧹 Cleaning workspace...'
            cleanWs()
        }
    }
}
