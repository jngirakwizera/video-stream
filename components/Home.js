import { StatusBar } from 'expo-status-bar';
import React,  { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Platform } from 'react-native';

import IOSVideoModule from "../native_components/IOSVideoModule";
import VideoModule from "../native_components/VideoModule";

//Functional component used to show the list of videos

export default function Home({navigation}) {


    //react hooks
    const [mediaData, setMediaData] = useState([]);


    //check if iOS or Android
    if(Platform.OS === 'ios'){

        //get video data from native iOS component
        let videoDataJSON = IOSVideoModule.getVideoData((error, videoData) => {
            setMediaData(JSON.parse(videoData));
        });
    }
    else{
        //get video data from native Android component
        let videoDataJSON = VideoModule.getVideoData((videoData) => {
            setMediaData(JSON.parse(videoData));
        });
    }



    return (
        <View style={styles.container}>

            {/*flatlist component with child text components to show video title*/}
            {/*when pressed will navigate to the video detail screen, passing the data */}
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

//css
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
