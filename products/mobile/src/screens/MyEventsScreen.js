import React, {PureComponent} from 'react';
import {View, Text, FlatList} from "react-native";
import styles from '../styles/WHStyle';

const Event = ({ eventName }) => {
    return (
        <Text>Event: {eventName}</Text>
    );
};

const Swipeout = () => {
    var swipeoutBtns = [
        {
            text: 'Button'
        }
    ]
    return (
        <Swipeout right={swipeoutBtns}>
            <View>
                <Text>Swipe me left</Text>
            </View>
        </Swipeout>
    );
};

export default class MyEventsScreen extends PureComponent {
    render() {
        return (
            <FlatList
                data={}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
        );
    }
}