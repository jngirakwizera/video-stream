pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'uname -a'
          sh 'npm i'
          sh 'npm ci'
        }
    }

    stage('Building Android') {
        steps {
            echo 'Building Android...'
            sh "adb"
            sh 'npx react-native run-android'
        }
    }
    stage('Testing') {
      steps {
        echo 'Testing...'
        sh 'npx jest --ci'
      }
      post {
        always {
          echo 'Finished...'
        }
      }
    }
  }
}