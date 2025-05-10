pipeline {
    agent any

    environment {
        CI = 'true' // Set CI environment variable for tools like Jest
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image using the Dockerfile
                    sh 'docker build -t react-app-test -f frontend/Dockerfile .'
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                script {
                    // Run the Docker container to execute unit tests
                    sh 'docker run --rm react-app-test'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'All tests passed successfully!'
        }
        failure {
            echo 'Some tests failed. Please check the logs.'
        }
    }
}
