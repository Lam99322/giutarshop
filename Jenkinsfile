pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'phuonglam2507'
        VPS_IP = '13.211.214.166'
        REPO_URL = 'git@github.com:Lam99322/giutarshop.git'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Cloning source code from GitHub...'
                git branch: 'main',
                    url: "${REPO_URL}",
                    credentialsId: 'github-ssh'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo '🐳 Building Docker images...'
                sh '''
                    docker build -t ${DOCKERHUB_USER}/giutarshop-backend ./server
                    docker build -t ${DOCKERHUB_USER}/giutarshop-frontend ./client
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                echo '⬆️ Pushing images to DockerHub...'
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-cred',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${DOCKERHUB_USER}/giutarshop-backend
                        docker push ${DOCKERHUB_USER}/giutarshop-frontend
                        docker logout
                    '''
                }
            }
        }

        stage('Test SSH Connection') {
            steps {
                echo '🧪 Testing SSH connection to VPS...'
                script {
                    sshagent(credentials: ['vps-ssh']) {
                        sh """
                            ssh -o BatchMode=yes -o StrictHostKeyChecking=no ubuntu@${VPS_IP} 'echo "✅ SSH connection successful!"'
                        """
                    }
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                echo '🚀 Deploying application to VPS...'
                script {
                    sshagent(credentials: ['vps-ssh']) {
                        sh """
                            ssh -o StrictHostKeyChecking=no ubuntu@${VPS_IP} << 'EOF'
                                set -e
                                echo "📥 Pulling latest code..."
                                if [ ! -d ~/giutarshop ]; then
                                    git clone ${REPO_URL} ~/giutarshop
                                fi
                                cd ~/giutarshop
                                git pull origin main

                                echo "🧹 Cleaning old containers..."
                                docker compose down || true
                                docker system prune -af || true

                                echo "⬇️ Pulling latest Docker images..."
                                docker pull ${DOCKERHUB_USER}/giutarshop-backend
                                docker pull ${DOCKERHUB_USER}/giutarshop-frontend

                                echo "🚀 Starting containers..."
                                docker compose up -d --remove-orphans

                                echo "✅ Deployment completed successfully!"
                                docker ps -a
                            EOF
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully! Application deployed on VPS.'
        }
        failure {
            echo '❌ CI/CD Pipeline failed! Please check the logs for details.'
        }
        always {
            echo '🧹 Cleaning Jenkins workspace...'
            cleanWs()
        }
    }
}
