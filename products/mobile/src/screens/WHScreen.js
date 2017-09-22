import React from 'react';
import {TabNavigator} from "react-navigation";
import Ion from "react-native-vector-icons/Ionicons";

import EventsScreen from './EventsScreen';
import CategoriesScreen from "./CategoriesScreen";
import data from '../../data.json';
import styles from '../styles/WHStyle';

const EventsWrapper = function (props) {
    const {params} = props.navigation.state;
    const eventCategory = params ? params.category : null;
    let events = data.events.filter(e => !eventCategory || e.category === eventCategory);
    return <EventsScreen events={events}/>
};

const CategoriesWrapper = function (props) {
    const {navigate} = props.navigation;
    const categoryClicked = (category) => {
        console.debug("Category", category, "was selected");
        navigate('Events', {category: category});
    };

    return <CategoriesScreen categories={data.categories} categoryPicked={categoryClicked}/>
};

EventsWrapper.navigationOptions = {
    tabBarIcon: ({tintColor}) => <Ion name="ios-calendar-outline" style={[styles.actionIcon, {color: tintColor}]}/>
};

CategoriesWrapper.navigationOptions = {
    tabBarIcon: ({tintColor}) => <Ion name="md-planet" style={[styles.actionIcon, {color: tintColor}]}/>
};

const MainTabs = TabNavigator(
    {
        'Events': {
            screen: EventsWrapper,
        },
        'Browse': {
            screen: CategoriesWrapper,
        },
    }, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: '#127ac0',
            style: styles.tabBar,
        },
        swipeEnabled: false
    }
);

export default WHScreen = () => <MainTabs/>;
