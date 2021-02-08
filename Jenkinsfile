pipeline {
  agent any
  stages {
    stage('Review node and npm installations') {
      steps {
        nodejs(nodeJSInstallationName: 'node') {
          sh 'npm -v'  //substitute with your code
          sh 'node -v'
        }
      }
    }
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'npm i'
          sh 'npm ci'
        }
    }
    stage('Building iOS') {
      steps {
        echo 'Building iOS...'
        sh 'npx pod-install'
        sh 'npx react-native run-ios'
      }
    }
    stage('Building Android') {
        steps {
            echo 'Building Android...'
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