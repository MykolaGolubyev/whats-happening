import React from 'react'
import {Text, View} from "react-native";
import styles from '../styles/WHStyle';

const Card = ({title, description, detail}) => {
    return (
        <View style={styles.event}>
            <Text style={styles.cname}>{title}</Text>
            <Text style={styles.subcount}>{detail}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

export default Card;