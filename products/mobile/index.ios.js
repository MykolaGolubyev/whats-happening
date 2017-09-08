/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';

import HomeScreen from './src/screens/WHScreen';

export default class WhatsHappeningMobile extends Component {
    render() {
        return <HomeScreen/>;
    }
}


AppRegistry.registerComponent('mobile', () => WhatsHappeningMobile);
