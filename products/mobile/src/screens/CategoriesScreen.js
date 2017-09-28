import React, {PureComponent} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {sortBy} from 'lodash';

import Card from '../components/Card';
import styles from '../styles/WHStyle';

const CategoryCard = (props) => {
    const {name, description, subcount} = props.category;
    return (
        <TouchableOpacity onPress={() => props.categoryPicked(name)}>
            <Card title={name} description={description} detail={subcount}/>
        </TouchableOpacity>
    )
};

export default class CategoriesScreen extends PureComponent {
    render() {
        const categories = sortBy(this.props.categories, c => c.name);
        return (
            <ScrollView style={[styles.categoriesContainer]}>
                <FlatList
                    data={categories}
                    renderItem={({item: c}) => <CategoryCard category={c}
                                                             categoryPicked={this.props.categoryPicked}/>}
                    keyExtractor={c => c.name}/>
            </ScrollView>
        );
    }
}