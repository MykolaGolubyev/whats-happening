import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';

import HomeScreen from './src/screens/WHScreen';

export default class WhatsHappeningMobile extends Component {
    componentDidMount() {
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        return <HomeScreen/>;
    }
}

AppRegistry.registerComponent('mobile', () => WhatsHappeningMobile);
