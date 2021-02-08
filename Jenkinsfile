pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'uname -a'
          sh 'cd $ANDROID_HOME/tools/bin'
          sh 'pwd'
          sh './sdkmanager "system-images;android-25;google_apis;x86"'
          sh 'avdmanager create avd -n emuTest -k "system-images;android-24;default;armeabi-v7a"'
          sh 'emulator -avd emuTest -noaudio -no-boot-anim -gpu off'
          sh 'npm i'
          sh 'npm ci'
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