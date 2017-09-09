import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/WHStyle';

const CategoryCard = (props) => {
    const {name, description, subcount} = props.category;
    return (
        <View style={[styles.categoryCard]}>
            <View style={styles.categoryDescription}>
                <Text style={styles.cname}>{name}</Text>
                <Text style={styles.subcount}>({subcount})</Text>
            </View>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
};

export default class CategoriesScreen extends PureComponent {
    render() {
        let categoryCards = this.props.categories.map(c => <CategoryCard key={c.name} category={c}/>);
        return (
            <View style={[styles.container, styles.categoriesContainer]}>
                <View style={styles.categoriesRow}>
                    {categoryCards}
                </View>
            </View>
        );
    }
}