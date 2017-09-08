import React, {PureComponent} from 'react';
import {View, Text, FlatList} from "react-native";
import Swipeout from 'react-native-swipe-out';
import styles from '../styles/WHStyle';

const swipeOutButtonsLeft = [
    {
        text:'Accept',
        backgroundColor:'green',
        type:'default'
    }
];

const swipeOutButtonsRight = [
    {
        text:'Cancel',
        backgroundColor:'red',
        type:'default'
    }
];

const Event = ({ eventName }) => {
    return (
        <Swipeout style={styles.swipeout} left={swipeOutButtonsLeft} right={swipeOutButtonsRight}>
            <View>
                <Text>{eventName}</Text>
            </View>
        </Swipeout>
    );
};

export default class MyEventsScreen extends PureComponent {
    render() {
        return (
            <FlatList
                data={this.props.events}
                renderItem={({item}) => <Event eventName={item.name}/>}
                keyExtractor={item => item.name}
            />
        );
    }
}