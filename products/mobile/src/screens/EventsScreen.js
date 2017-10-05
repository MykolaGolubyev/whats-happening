import React, {PureComponent} from 'react';
import {FlatList, ScrollView, Text, View} from "react-native";
import styles from '../styles/WHStyle';
import Card from '../components/Card';
import Ion from "react-native-vector-icons/Ionicons";


const Event = ({event}) => {
    return (
        <View style={styles.eventContainer}>
            <Card title={event.name} description={event.description} detail={event.date}/>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', paddingLeft:40, paddingRight:40}}>
                <Ion name="md-checkmark-circle-outline" style={styles.optionIcons}/>
                <Ion name="ios-checkmark-circle-outline" style={styles.optionIcons}/>
            </View>
        </View>
    );
};

export default class EventsScreen extends PureComponent {
    render() {
        return (
            <ScrollView style={styles.eventsContainer}>
                <FlatList
                    data={this.props.events}
                    renderItem={({item: event}) => <Event event={event}/>}
                    keyExtractor={item => item.name}
                />
            </ScrollView>
        );
    }
}