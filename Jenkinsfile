pipeline {
    agent any
    stages {
        stage("clone repository"){

         steps {
            git branch: 'main', url: 'https://github.com/ManimoGu/blog-app.git'
         }

        }
        stage("build images"){

            steps{
                sh """
                docker build -t serverimage ./server
                docker build -t clientimage ./client
                """
            }
            
        }
        stage("run containers"){

            steps{
                sh """
                docker run --name servercontainer -dp 5000:5000 serverimage 
                docker run --name clientcontainer -dp 5173:5173 clientimage 
                """
            }
            
        }
    }
    post {
        success{
            echo "clone, build, run completed successfully"
        }
        failure{
            echo "clone build run failed"
        }
    }
}