import { View, StyleSheet, Text } from 'react-native';

export default CategoryLabelItem = (props) => {
    return (
        <View style={styles.categoryLabel}>
            <Text style={styles.categoryText}>{props.category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryLabel: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#EEF2E6',
        borderWidth: 1,
        borderColor: '#3D8361',
        paddingTop: 2,
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 2,
        borderRadius: 20,
        marginRight: 7,       
    },
    categoryText: {
        fontSize: 9,
        alignSelf: 'center',
    }
})