pipeline {
    agent {
        dockerfile {
            filename 'frontend/Dockerfile'
            additionalBuildArgs '--no-cache'
        }
    }

    environment {
        CI = 'true'  // Tells React to treat this as CI for proper test handling
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'  // 'ci' is faster and more reliable for CI
            }
        }

        stage('Run Unit Tests') {
            steps {
                sh 'npm test -- --watchAll=false'  // Avoid interactive prompts in CI
            }
        }
    }
}
