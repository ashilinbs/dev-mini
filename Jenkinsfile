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

    stage('Install Dependencies') {
    steps {
        dir('frontend') {
            sh 'npm install'
        }
    }
}

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
    }
}
