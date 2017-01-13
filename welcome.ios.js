/**
 * Created by moiz on 12/31/16.
 */
'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
    }
});

class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.stretch}
                    source={require('./images/splash_loading.png')}
                />
            </View>
        );
    }
}

module.exports = Welcome;