pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'uname -a'
          sh '$ANDROID_HOME/emulator/emulator -list-avds'
          sh 'npm i'
          sh 'npm ci'
        }
    }
    stage('Building Android') {
        steps {
            echo 'Building Android...'
            sh '$ANDROID_HOME/emulator/emulator -avd test -noaudio -no-boot-anim -gpu off'
            sh 'npx react-native run-android '
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