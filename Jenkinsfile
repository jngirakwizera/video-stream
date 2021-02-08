pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh '/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)" > /dev/null'
          sh 'brew install node'
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