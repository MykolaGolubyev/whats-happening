import React from 'react';
import {TabNavigator} from "react-navigation";
import MyEventsScreen from './MyEventsScreen';
import CategoriesScreen from "./CategoriesScreen";
import data from '../../data.json';

const MyEventsWrapper = function () {
  return <MyEventsScreen events={data.events}/>
};

const CategoriesWrapper = function () {
    return <CategoriesScreen categories={data.categories}/>
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
        tabBarPosition: 'top',
        swipeEnabled: true
    }
);
