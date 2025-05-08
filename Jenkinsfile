pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend' // ✅ Context set to frontend
            additionalBuildArgs '--no-cache'
        }
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install --loglevel=verbose'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    sh 'npx jest --watchAll=false'
                }
            }
        }
    }
}
