pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            args '-v $HOME/.npm:/root/.npm' // Cache node_modules
        }
    }

    environment {
        CI = 'true'
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
    }
}
