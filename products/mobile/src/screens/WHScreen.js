import React from 'react';
import {TabNavigator} from "react-navigation";
import Ion from "react-native-vector-icons/Ionicons";

import MyEventsScreen from './MyEventsScreen';
import CategoriesScreen from "./CategoriesScreen";
import data from '../../data.json';
import styles from '../styles/WHStyle';

const MyEventsWrapper = function () {
    return <MyEventsScreen events={data.events}/>
};

const CategoriesWrapper = function () {
    return <CategoriesScreen categories={data.categories}/>
};

MyEventsWrapper.navigationOptions = {
    tabBarIcon: ({tintColor}) => <Ion name="ios-calendar" style={styles.actionIcon}/>
};

CategoriesWrapper.navigationOptions = {
    tabBarIcon: ({tintColor}) => <Ion name="md-planet" style={styles.actionIcon}/>
};


export default WHScreen = TabNavigator(
    {
        'My Events': {
            screen: MyEventsWrapper,
        },
        'Browse': {
            screen: CategoriesWrapper,
        },
    }, {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            iconStyle: {
                width: 35,
                height: 60
            },
            tabStyle: {
                height: 40
            },
            pressColor: '#d5dcea'
        }
    }
);
