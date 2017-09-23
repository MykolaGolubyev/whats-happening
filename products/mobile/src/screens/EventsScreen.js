import React, {PureComponent} from 'react';
import {View, Text, FlatList} from "react-native";
import styles from '../styles/WHStyle';

const Event = ({event}) => {
    return (
        <View style={styles.event}>
            <Text style={styles.cname}>{event.name}</Text>
            <Text style={styles.subcount}>{event.date}</Text>
            <Text style={styles.description}>{event.description}</Text>
        </View>
    );
};

export default class EventsScreen extends PureComponent {
    render() {
        return (
            <View style={styles.eventsContainer}>
                <FlatList
                    data={this.props.events}
                    renderItem={({item: event}) => <Event event={event}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        );
    }
}