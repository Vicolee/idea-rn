import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CATEGORIES from '../constants/Categories';
import { MultipleSelectList } from 'react-native-dropdown-select-list';

export default CreatePostScreen = (props) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const onPressDismiss = (props) => {
        console.log('clicked dismiss');
        props.navigation.goBack();
    }
    
    const onPressPost = (props) => {
        console.log('clicked post');
        console.log('selected categories: ' + selectedCategories);
        console.log('post title: ' + postTitle);
        console.log('post body: ' + postBody);
        props.navigation.navigate("HomeScreen");
        // TODO: Call action to create post and send to backend
    }

    return (
        <View style={styles.createPostContainer}>
            <View style={styles.createPostHeader}>
                <TouchableOpacity onPress={() => onPressDismiss(props)}>
                    <Ionicons name="close-outline" size={32} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onPressPost(props)} style={styles.createPostButton}>
                    <Text style={styles.createPostButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
            {/* TODO: Convert placeholder profile to userprofile photo */}
            <View style={styles.createPostAuthorContainer}>
                <Text style={styles.createPostAuthor}>
                    <Ionicons name="person-circle-outline" size={50} />
                </Text>
                <View style={styles.createPostDropdown}>
                    <MultipleSelectList
                        setSelected={(category) => setSelectedCategories(category)}
                        data={CATEGORIES}
                        save="value"
                        label="Categories"
                        placeholder='Select Categories'
                    />
                </View>

            </View>
            <TextInput 
                placeholder="Insert title here"
                onChangeText={(text) => {setPostTitle(text)}}
                value={postTitle}
                borderBottomWidth={1}
                maxHeight={60}
                maxLength={50}
                margin={10}
            />
            <TextInput 
                placeholder="Insert description here"
                onChangeText={(text) => {setPostBody(text)}}
                value={postBody}
                borderBottomWidth={1}
                multiline={true}
                numberOfLines={3}
                maxLength={300}
                margin={10}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    createPostContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    createPostHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    createPostAuthorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        margin: 10
    },
    createPostAuthor: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'flex-start',
        marginTop: 5,
    },
    createPostDropdown: {
        display: 'flex',
        flex: 1,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    createPostButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 63,
        height: 30,
        borderRadius: 30,
        backgroundColor: '#3D8361',
    },
    createPostButtonText: { 
        font: 'Inter',
        color: 'White',
        fontSize: 12,
        fontWeight: '700',
    },
});