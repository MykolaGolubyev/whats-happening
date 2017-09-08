import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/WHStyle';

const CategoryCard = (props) => {
    return (
        <View style={[styles.container, styles.categoryCard]}>
            <Text>{props.name}</Text>
        </View>
    )
};

export default class CategoriesScreen extends PureComponent {
    render() {
        return (
            <View style={[styles.container, styles.categoriesContainer]}>
                <View style={styles.categoriesRow}>
                    <CategoryCard name={'Category 1'}/>
                    <CategoryCard name={'Category 2'}/>
                    <CategoryCard name={'Category 3'}/>
                </View>
            </View>
        );
    }
}