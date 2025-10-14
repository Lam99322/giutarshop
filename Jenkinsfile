pipeline {
    agent any

    environment {
        SERVER_HOST = "YOUR_SERVER_IP"
        SERVER_USER = "root"              // hoặc 'ubuntu' nếu AWS EC2
        IMAGE_SERVER = "server-app"
        IMAGE_CLIENT = "client-app"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[
                        url: 'https://github.com/Lam99322/giutarshop.git',
                        credentialsId: 'github-pat'
                    ]]
                ])
            }
        }

        stage('Build & Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin

                    docker build -t docker.io/$DOCKER_USER/${IMAGE_SERVER}:latest ./server
                    docker build -t docker.io/$DOCKER_USER/${IMAGE_CLIENT}:latest ./client

                    docker push docker.io/$DOCKER_USER/${IMAGE_SERVER}:latest
                    docker push docker.io/$DOCKER_USER/${IMAGE_CLIENT}:latest
                    '''
                }
            }
        }

        stage('Deploy to Server') {
            steps {
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub-cred', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS'),
                    file(credentialsId: 'docker-compose-file', variable: 'DOCKER_COMPOSE_PATH')
                ]) {
                    sshagent (credentials: ['server-ssh-key']) {
                        sh '''
                        echo "Copy docker-compose.yml to server"
                        scp -o StrictHostKeyChecking=no $DOCKER_COMPOSE_PATH $SERVER_USER@$SERVER_HOST:~/project/docker-compose.yml

                        ssh -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_HOST "
                            cd ~/project
                            echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                            docker compose pull
                            docker compose down
                            docker compose up -d
                            docker image prune -f
                        "
                        '''
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ CI/CD Pipeline Completed Successfully!"
        }
        failure {
            echo "❌ CI/CD Pipeline Failed!"
        }
    }
}
