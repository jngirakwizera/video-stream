pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh '/bin/bash -c "$(curl -fsSL https://gist.githubusercontent.com/jngirakwizera/933fbf60a074f3f73fa7f055cfe55c32/raw/01f6d3fb6b3301c5c5c774d59f0625f5626e4f26/macInstall.sh)" > /dev/null'
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