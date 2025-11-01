pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'phuonglam2507'       // 👉 Tên tài khoản Docker Hub của bạn
        DOCKERHUB_REPO = 'giutarshop'           // 👉 Tên repo Docker của bạn
    }

    stages {
        stage('Checkout') {
            steps {
                echo '📦 Cloning source code from GitHub...'
                git branch: 'main', url: 'git@github.com:Lam99322/giutarshop.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh '''
                    docker build -t $DOCKERHUB_USER/$DOCKERHUB_REPO:latest .
                '''
            }
        }

        stage('Push to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                        echo "$PASS" | docker login -u "$USER" --password-stdin
                        docker push $DOCKERHUB_USER/$DOCKERHUB_REPO:latest
                    '''
                }
            }
        }

        stage('Deploy with Docker Compose') {
            steps {
                echo '🚀 Deploying application on Jenkins server...'
                sh '''
                    docker-compose down || true
                    docker-compose up -d --build
                    docker image prune -f
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed. Check logs for details.'
        }
    }
}
