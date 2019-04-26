import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from "react-native-elements";
import VideoItem from './component/videoitem';

export default class App extends Component<Props> {

    // state = {
    //     textValue: "نمایش متن"
    // };
    //
    // _onPressButton() {
    //     // Alert.alert("fdfdf");
    //
    //     DialogProgress.show(options);
    //     fetch('https://www.aparat.com/etc/api/categoryVideos/cat/7/perpage/9', {
    //         method: 'GET'
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             DialogProgress.hide();
    //             return Alert.alert("Suuceess: " + responseJson.categoryvideos[1].title);
    //         })
    //         .catch((error) => {
    //             DialogProgress.hide();
    //             Alert.alert("Error: " + error.toString());
    //         });
    // }


    render() {
        return (
            <View style={style.container}>

                <View style={style.navBar}>
                    <Image source={require('./images/ytlogo.png')} style={{width: 98, height: 22}}/>
                    <View style={style.rightNav}>
                        <TouchableOpacity>
                            <Icon style={style.navItem} name="search" size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon style={style.navItem} name="account-circle" size={25}/>
                        </TouchableOpacity>
                    </View>


                </View>

                <View style={style.body}>
                    <VideoItem />
                </View>

                <View style={style.tabBar}>

                    <TouchableOpacity style={style.tabItem}>
                        <Icon name="home" size={25}/>
                        <Text style={style.tabTitle}>Home</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.tabItem}>
                        <Icon name="whatshot" size={25}/>
                        <Text style={style.tabTitle}>Trending</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.tabItem}>
                        <Icon name="subscriptions" size={25}/>
                        <Text style={style.tabTitle}>Subscriptions</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.tabItem}>
                        <Icon name="folder" size={25}/>
                        <Text style={style.tabTitle}>Library</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
var style = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        height: 56,
        backgroundColor: 'white',
        elevation: 3,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightNav: {
        flexDirection: 'row'
    },
    navItem: {
        marginLeft: 16
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#d9d9d9',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    body: {
        flex: 1
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    tabTitle: {
        fontSize: 11,
        color: '#9f9f9f',
        paddingTop: 4
    }
});

