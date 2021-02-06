
import { StyleSheet, Text, View, Button } from 'react-native';
import Video from 'react-native-video';
import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';

export default function VideoDetail({route, navigation}) {
    // console.log(route.params.videoData)
    let params = route.params;
    let videoData = params.videoData;
    let videoUrl = videoData.sources;
    let playbackObject;
    const playerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [playText, setPlayText] = useState("Play");


    let _handleVideoRef = component => {
        playbackObject = component;
    }

    const _playPauseVideo = () =>{
        if(isPlaying){
            setIsPlaying(false);
            setPlayText("Pause");
        }
        else{
            setIsPlaying(true);
            setPlayText("Play");
        }

    }

    const _stopVideo = () =>{
        playerRef.current.seek(0);
        _playPauseVideo();
    }



    return (
        <View style={styles.container}>


            <Video source={{uri: videoUrl}}   // Can be a URL or a local file.
                   style={styles.video}
                   paused={isPlaying}
                   ref={playerRef}
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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center'
    },
    video: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * (9 / 16),
        backgroundColor: 'black',
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
