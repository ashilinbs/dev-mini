pipeline {
    agent {
        dockerfile {
            filename 'frontend/Dockerfile' // Path to your Dockerfile
            additionalBuildArgs '--no-cache' // Optional: Force a clean build
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
