import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default CategorySelectItem = (props) => {
    return (
        // view for different categories
        <TouchableOpacity 
            onPress={() => props.onPress(props.category.key)}
            style={[
                styles.categoryButton,
                props.isSelected ? styles.selectedCategory : null
            ]}
            >
            <Text>{props.category.value}</Text>
        </TouchableOpacity> 
    )
}



const styles = StyleSheet.create({
    categoryButton: {
        justifyContent: 'space-around',
        alignItems: 'space-around',
        height: 24,
        paddingHorizontal: 10,
        borderColor: '#3D8361',
        borderWidth: 1,
        borderRadius: 30,
        margin: 3,
    },
    selectedCategory: {
        backgroundColor: '#4da379',
    }
});