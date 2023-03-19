import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default CategoryItem = (props) => {
    return (
        // view for different categories
        <TouchableOpacity onPress={() => {onPressCategory(props)}} style={styles.categoryButton}>
            <Text>{props.category}</Text>
        </TouchableOpacity> 
    )
}

const onPressCategory = (props) => {
    console.log('clicked category: ' + props.category)
    // TODO: update category that user is looking at and store in backend
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
});