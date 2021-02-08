pipeline {
  agent any
  stages {
    stage('Init') {
        steps {
          echo 'Install dependencies...'
          sh 'uname -a'
          sh 'yes Y | $ANDROID_HOME/tools/bin/sdkmanager --install "platform-tools" "system-images;android-28;google_apis;x86" "platforms;android-28" "build-tools;28.0.3" "emulator"'
          sh 'yes Y | $ANDROID_HOME/tools/bin/sdkmanager --licenses'
          sh 'echo "no" | $ANDROID_HOME/tools/bin/avdmanager --verbose create avd --force --name "test" --device "pixel" --package "system-images;android-28;google_apis;x86" --tag "google_apis" --abi "x86"'
          sh '$ANDROID_HOME/emulator/emulator -list-avds'
          sh '$ANDROID_HOME/emulator/emulator -avd test -noaudio -no-boot-anim -gpu off'
          sh 'npm i'
          sh 'npm ci'
        }
    }
    stage('Building Android') {
        steps {
            echo 'Building Android...'
//             sh '$ANDROID_HOME/emulator/emulator -avd test -noaudio -no-boot-anim -gpu off'
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