pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
            dir 'frontend'  // ✅ Dockerfile is in frontend directory
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
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('frontend') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }
    }
}
