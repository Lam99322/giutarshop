pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
        GITHUB_CREDENTIALS = credentials('github-creds')
        DOCKERHUB_USER = 'phuonglam2507'
        VPS_IP = '13.211.214.166'  // 👉 thay bằng IP thật của VPS
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Cloning source code from GitHub...'
                git branch: 'main', url: 'https://github.com/Lam99322/giutarshop.git', credentialsId: 'github-creds'
            }
        }

        stage('Build Docker Images') {
            steps {
                echo '🐳 Building Docker images...'
                sh '''
                docker build -t $DOCKERHUB_USER/giutarshop-frontend ./client
                docker build -t $DOCKERHUB_USER/giutarshop-backend ./server
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                echo '⬆️ Pushing images to DockerHub...'
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $DOCKERHUB_USER/giutarshop-frontend
                    docker push $DOCKERHUB_USER/giutarshop-backend
                    docker logout
                    '''
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                echo '🚀 Deploying application on VPS...'
                sshagent(['vps-ssh']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@$VPS_IP "
                        cd ~/giutarshop &&
                        echo '📥 Pulling latest code from GitHub...' &&
                        git pull origin main &&
                        echo '🧹 Rebuilding containers...' &&
                        docker-compose down &&
                        docker-compose up -d --build
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
            echo '❌ CI/CD Pipeline failed! Please check logs for more details.'
        }
    }
}
