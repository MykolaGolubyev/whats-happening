import {StyleSheet} from "react-native";

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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    categoryCard: {
        borderRadius: 8,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        height: 100
    },
    categoryDescription: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5
    },
    swipeout: {
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingLeft: 16,
    },
    cname: {flex: 1, fontSize: 15, fontWeight: 'bold', fontStyle: 'italic', color: '#000'},
    description: {flex: 2, textAlign: 'left', fontSize: 10, fontStyle: 'italic', color: '#000'},
    subcount: {flex: 1, textAlign: 'right', fontSize: 10, fontStyle: 'italic', color: '#00b'},
    actionIcon: {fontSize: 20, height: 20}
});