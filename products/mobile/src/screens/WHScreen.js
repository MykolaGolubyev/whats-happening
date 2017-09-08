import React from 'react';
import {TabNavigator} from "react-navigation";
import MyEventsScreen from './MyEventsScreen';
import CategoriesScreen from "./CategoriesScreen";

export default WHScreen = TabNavigator(
    {
        'My Events': {
            screen: MyEventsScreen,
        },
        'Browse': {
            screen: CategoriesScreen,
        },
    }, {
        tabBarPosition: 'top'
    }
);
