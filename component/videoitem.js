import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from "react-native-elements";
import {Fonts} from "../src/utils/Fonts";

export default class VideoItem extends Component {
    render() {
        let video = this.props.video;

        return (
            <View style={style.container}>
                <Image source={{uri: video.big_poster}} style={{height: 200}}/>
                <View style={style.descContainer}>
                    <TouchableOpacity>
                        <Icon name="more-vert" size={20} color="#888888"/>
                    </TouchableOpacity>

                    <View style={style.videoDetails}>
                        <Text style={style.videoTitile}>{video.title}</Text>
                        <Text
                            style={style.videoStats}>{video.username + " · " + video.visit_cnt + " views" + " - " + video.sdate}</Text>
                    </View>
                    <Image source={{uri: 'https://randomuser.me/api/portraits/women/76.jpg'}}
                           style={{width: 50, height: 50, borderRadius: 25}}/>
                </View>
            </View>
        )
    }
}

var style = StyleSheet.create({

    container: {
        padding: 16,
    },
    descContainer: {
        flexDirection: 'row',
        paddingTop: 16,
    },
    videoTitile: {
        fontSize: 16,
        color: '#3c3c3c',
        fontFamily:Fonts.irans_sans
    },
    videoDetails: {
        paddingHorizontal: 16,
        flex: 1
    },
    videoStats: {
        fontSize: 14,
        textAlign: 'right',
        fontFamily:Fonts.irans_sans
    }

});