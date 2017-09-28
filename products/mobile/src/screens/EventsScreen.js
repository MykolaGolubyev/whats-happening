import React, {PureComponent} from 'react';
import {FlatList, View} from "react-native";
import styles from '../styles/WHStyle';
import Card from '../components/Card';

const Event = ({event}) => {
    return <Card title={event.name} description={event.description} detail={event.date}/>
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