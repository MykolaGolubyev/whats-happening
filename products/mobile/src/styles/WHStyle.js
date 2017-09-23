import {Dimensions, StyleSheet} from "react-native";

export default WHStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#272a2c',
        paddingTop: 26
    },
    categoriesContainer: {
        flexDirection: 'column'
    },
    eventsContainer: {
        flexDirection: 'column',
    },
    categoriesRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 5,
        flexWrap: 'wrap'
    },
    categoryCard: {
        borderRadius: 8,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        height: 100,
        width: Dimensions.get('window').width / 3
    },
    categoryDescription: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    event: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },
    cname: {fontSize: 15, fontWeight: 'bold', fontStyle: 'italic', color: '#676767'},
    description: {textAlign: 'left', fontSize: 10, fontStyle: 'italic', color: '#8f95af'},
    subcount: {textAlign: 'right', fontSize: 10, fontStyle: 'italic', color: '#bbbb2f'},
    actionIcon: {fontSize: 26, height: 26, color: '#ccc'},
    tabBar: {backgroundColor: '#000'}
});