pipeline {
    agent {
        dockerfile {
            filename 'frontend/Dockerfile'
            dir 'frontend' // Make sure Docker context is the same as where Dockerfile + package.json exist
            additionalBuildArgs '--no-cache'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}
