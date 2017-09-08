import React, {PureComponent} from 'react';
import {View, Text} from "react-native";
import styles from '../styles/WHStyle';

export default class MyEventsScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Text>My Events</Text>
            </View>
        );
    }
}