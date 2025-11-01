pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'phuonglam2507'
    }

    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github-creds', url: 'https://github.com/Lam99322/giutarshop.git'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/giutarshop-frontend:latest -f ./client/Dockerfile ./client'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USER/giutarshop-backend:latest -f ./server/Dockerfile ./server'
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh 'docker push $DOCKERHUB_USER/giutarshop-frontend:latest'
                sh 'docker push $DOCKERHUB_USER/giutarshop-backend:latest'
            }
        }

        stage('Deploy on VPS') {
            steps {
                // Kết nối VPS và chạy docker compose
                sh 'ssh ubuntu@<VPS-IP> "docker compose -f ~/giutarshop/docker-compose.prod.yml up -d"'
            }
        }
    }
}
