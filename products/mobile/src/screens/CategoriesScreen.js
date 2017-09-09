import React, {PureComponent} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import styles from '../styles/WHStyle';

const CategoryCard = (props) => {
    const {name, description, subcount} = props.category;
    return (
        <Card title={name} containerStyle={styles.categoryCard} titleStyle={styles.cname}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.subcount}>{`${subcount} members`}</Text>
        </Card>
    )
};

export default class CategoriesScreen extends PureComponent {
    render() {
        let categoryCards = this.props.categories.map(c => <CategoryCard key={c.name} category={c}/>);
        return (
            <ScrollView style={[styles.categoriesContainer]}>
                <View style={styles.categoriesRow}>
                    {categoryCards}
                </View>
            </ScrollView>
        );
    }
}