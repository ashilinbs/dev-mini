pipeline {
    agent {
        label 'ubuntu' // Replace with your Ubuntu node label
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Run in Docker') {
            agent {
                docker {
                    image 'node:18-alpine'
                    args '-v $HOME/.npm:/root/.npm' // Cache npm modules
                }
            }
            stages {
                stage('Install Dependencies') {
                    steps {
                        sh 'npm install'
                    }
                }

                stage('Run Tests') {
                    steps {
                        sh 'npm test'
                    }
                }

                stage('Check Node Version') {
                    steps {
                        sh 'node -v && npm -v'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed.'
        }
        success {
            echo 'All stages completed successfully.'
        }
        failure {
            echo 'One or more stages failed.'
        }
    }
}
