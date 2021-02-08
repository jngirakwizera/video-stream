pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'uname -a'
          sh 'avdmanager'
          sh 'npm i'
          sh 'npm ci'
        }
    }

    stage('Building Android') {
        steps {
            echo 'Building Android...'
            sh 'avdmanager'
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