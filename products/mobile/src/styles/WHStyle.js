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
});