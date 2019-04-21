/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <StatusBar backgroundColor="#4CAF50" barStyle="light-content"/>

                <View style={style.navbar}>
                    <Text style={style.navbarText}>Android browser</Text>
                    <Text style={style.navbarButton}>Search</Text>
                </View>

                <View>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.

                    </Text>
                </View>

            </View>
        );
    }
}

var style = StyleSheet.create({
    navbar: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 16
    },
    navbarText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1
    },

    navbarButton: {
        width: 50,
        textAlign: 'center',
    }
});

