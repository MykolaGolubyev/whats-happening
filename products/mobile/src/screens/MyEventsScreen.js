import React, {PureComponent} from 'react';
import {View, Text, FlatList} from "react-native";
import Swipeout from 'react-native-swipe-out';
import styles from '../styles/WHStyle';

const swipeOutButtonsLeft = [
    {
        text:'Accept',
        backgroundColor:'green',
        type:'default',
        component: <Text>Accept</Text>
    }
];

const swipeOutButtonsRight = [
    {
        text:'Cancel',
        backgroundColor:'red',
        type:'default',
        component: <Text>Cancel</Text>
    }
];

const Event = ({ eventName }) => {
    return (
        <Swipeout left={swipeOutButtonsLeft} right={swipeOutButtonsRight}>
            <View style={styles.swipeout}>
                <Text style={styles.cname}>{eventName}</Text>
            </View>
        </Swipeout>
    );
};

export default class MyEventsScreen extends PureComponent {
    render() {
        return (
            <View style={styles.eventsContainer}>
                <FlatList
                    data={this.props.events}
                    renderItem={({item}) => <Event eventName={item.name}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        );
    }
}