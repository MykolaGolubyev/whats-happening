import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/WHStyle';

const CategoryCard = (props) => {
    return (
        <View style={[styles.container, styles.categoryCard]}>
            <View style={styles.categoryDescription}>
                <Text style={styles.cname}>{props.name}</Text>
                <Text style={styles.subcount}>({props.subcount})</Text>
            </View>
            <Text style={styles.description}>{props.description}</Text>
        </View>
    )
};

export default class CategoriesScreen extends PureComponent {
    render() {
        return (
            <View style={[styles.container, styles.categoriesContainer]}>
                <View style={styles.categoriesRow}>
                    <CategoryCard name={'Games'} description='Games we play' subcount={10}/>
                    <CategoryCard name={'Sports'} description='Sports we play' subcount={20}/>
                    <CategoryCard name={'Movies'} description='Movies we watch' subcount={30}/>
                </View>
            </View>
        );
    }
}