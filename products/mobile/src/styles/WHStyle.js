import {Dimensions, StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    categoriesContainer: {
        flexDirection: 'column'
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
        width: 150,
        padding: 2
    },
    categoryDescription: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    eventsContainer: {
        flex: 1,
        marginTop: 26,
    },
    swipeout: {
        backgroundColor: '#FFF',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 20,
        paddingRight: 20,
    },
    cname: {flex: 1, fontSize: 15, fontWeight: 'bold', fontStyle: 'italic', color: '#000'},
    description: {flex: 2, textAlign: 'left', fontSize: 10, fontStyle: 'italic', color: '#000'},
    subcount: {flex: 1, textAlign: 'right', fontSize: 10, fontStyle: 'italic', color: '#00b'},
    actionIcon: {fontSize: 20, height: 20}
});