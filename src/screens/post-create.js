import { React, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CATEGORIES from '../constants/Categories';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { createPost, selectAllPosts } from '../redux-hooks/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';

export default CreatePostScreen = (props) => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);

    const onPressDismiss = () => {
        console.log('clicked dismiss');
        props.navigation.goBack();
    }
    
    const onPressPost = () => {
        console.log('clicked post');
        console.log('selected categories: ' + selectedCategories);
        console.log('post title: ' + postTitle);
        console.log('post body: ' + postBody);
        dispatch(createPost({author: "placeholder", title: postTitle, body: postBody, categories: selectedCategories, likedBy: [], comments: []}))
        props.navigation.navigate("HomeScreen");
    }

    const displayPostHeader = () => {
        return (
            <View style={styles.createPostHeader}>
                <TouchableOpacity onPress={onPressDismiss}>
                    <Ionicons name="close-outline" size={32} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onPressPost} style={styles.createPostButton}>
                    <Text style={styles.createPostButtonText}>Post</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const displayPostAuthorContainer = () => {
        // TODO: Fix dropdown position to absolute so that it overlays the textinputs
        return (
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
        );
    }

    return (
        <View style={styles.createPostContainer}>
            {displayPostHeader()}
            {/* TODO: Convert placeholder profile to userprofile photo */}
            {displayPostAuthorContainer()}
            <TextInput 
                placeholder="Title"
                onChangeText={(text) => {setPostTitle(text)}}
                value={postTitle}
                borderBottomWidth={1}
                maxHeight={60}
                maxLength={50}
                margin={10}
            />
            <TextInput 
                placeholder="What's brewing?"
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