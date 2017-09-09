import React, {Component} from 'react';
import {AppRegistry, StatusBar, View} from 'react-native';

import HomeScreen from './src/screens/WHScreen';
import styles from './src/styles/WHStyle';

export default class WhatsHappeningMobile extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('light-content', true);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar/>
                <HomeScreen/>
            </View>
        );
    }
}

AppRegistry.registerComponent('mobile', () => WhatsHappeningMobile);
