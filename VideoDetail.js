
import { StyleSheet, Text, View, Button } from 'react-native';
import {Video} from "expo-av";
import React, { useState, useEffect } from 'react';

export default function VideoDetail({route, navigation}) {
    console.log(route.params.videoData)
    let params = route.params;
    let videoData = params.videoData;
    let videoUrl = videoData.sources;
    let playbackObject;
    const [isPlaying, setIsPlaying] = useState(false);
    const [playText, setPlayText] = useState("Play");


    let _handleVideoRef = component => {
        playbackObject = component;

    }

    const _playPauseVideo = () =>{
        if(isPlaying){
            setIsPlaying(false);
            setPlayText("Play");
            playbackObject.pauseAsync();
        }
        else{
            setIsPlaying(true);
            setPlayText("Pause");
            playbackObject.playAsync();
        }

    }

    const _stopVideo = () =>{
        playbackObject.stopAsync();
    }



    return (
        <View style={styles.container}>
            <Video
                ref={_handleVideoRef}
                source={{ uri: videoUrl }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay={false}
                isLooping={false}
                style={{ width: 300, height: 300 }}
            />

            <View style={styles.buttonContainer}>
                <Button style={styles.videoButton} onPress={_playPauseVideo} title={playText}/>
                <Button style={styles.videoButton} onPress={_stopVideo} title="Stop"/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer:{
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    videoButton :{
        margin:10
    }
});