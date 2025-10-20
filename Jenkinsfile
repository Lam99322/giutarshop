pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-cred')
        GITHUB_CREDENTIALS = credentials('github-creds')
        DOCKERHUB_USER = 'phuonglam2507'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Lam99322/giutarshop.git', credentialsId: 'github-creds'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh '''
                docker build -t $DOCKERHUB_USER/guitarshop-frontend ./client
                docker build -t $DOCKERHUB_USER/guitarshop-backend ./server
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $DOCKERHUB_USER/guitarshop-frontend
                    docker push $DOCKERHUB_USER/guitarshop-backend
                    '''
                }
            }
        }

        stage('Deploy to VPS') {
            steps {
                echo '🚀 Deploying application on VPS...'
                sh '''
                docker-compose down
                docker-compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo '✅ CI/CD Pipeline completed successfully!'
        }
        failure {
            echo '❌ CI/CD Pipeline failed!'
        }
    }
}
