import { StatusBar } from 'expo-status-bar';
import React,  { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';

import IOSVideoModule from "../native_components/IOSVideoModule";
import VideoModule from "../native_components/VideoModule";


export default function Home({navigation}) {


    const [mediaData, setMediaData] = useState([]);


    if(Platform.OS === 'ios'){
        let videoDataJSON = IOSVideoModule.getVideoData((error, videoData) => {
            setMediaData(JSON.parse(videoData));
        });
    }
    else{
        let videoDataJSON = VideoModule.getVideoData((videoData) => {
            setMediaData(JSON.parse(videoData));
        });
    }



    return (
        <View style={styles.container}>
            <FlatList
                data={mediaData}
                renderItem={({ item }) => <Text style={styles.item} key={item.title} onPress={() =>
                    navigation.navigate('Video', { videoData: item })
                    // VideoModule.getVideoData()
                }>{item.title}</Text>}
            />
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
