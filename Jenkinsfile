pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend' // ✅ Only one 'frontend'
            additionalBuildArgs '--no-cache'
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
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}
