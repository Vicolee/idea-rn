import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import CATEGORIES from "../constants/Categories";
import timeAgo from "../helpers/timeAgo";
import { useSelector } from 'react-redux';
import CategoryTag from './CategoryTag';

export default Post = (props) => {

    const user = useSelector((state) => state.user.all.find(user => user.email === props.post.author));

    const displayPostHeader = () => {
        return (
            <View>
                <Text style={styles.postTitle}>{props.post.title}</Text>
                <View style={styles.postSecondHeaderContainer}>
                    <Text style={styles.postUsername}>@{user.username}</Text>
                    {/* TODO: Convert createdAt to timeAgo */}
                    <Text style={styles.postTime}>{timeAgo(props.post.createdAt)}</Text>
                    {displayPostCategories()}
                </View>
            </View>
        );
    }

    const displayPostCategories = () => {
        return (
            <View style={styles.postCategoryContainer}>
                {props.post.categories.map((idx) => {
                    console.log(CATEGORIES[idx].value)
                    return (
                        <CategoryTag category={CATEGORIES[idx].value}/>
                    );
                })}
            </View>
        )
    }
    
    const displayPostBody = () => {
        return (
            <View style={styles.postBody}>
                <Text>{props.post.body}</Text>
            </View>
        );
    }
    
    const displayPostFooter = () => {
        return (
            <View style={styles.postFooter}>
                {/* TODO: Make LikeButton liked take user's status of liking the post */}
                <View style={styles.postButtonContainer}>
                    <LikeButton liked={false} />
                    <Text style={styles.count}>{props.post.likedBy.length}</Text>
                </View>
                <View style={styles.postButtonContainer} >
                    <CommentButton />
                    <Text style={styles.count}>{props.post.comments.length}</Text>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {displayPostHeader()}
            {displayPostBody()}
            {displayPostFooter()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        borderBottomColor: "#E7ECF3",
        padding: 20,
    },
    postHeader: {
        flexDirection: 'column',
    },
    postSecondHeaderContainer: {
        flexDirection: 'row',
        marginTop: 3,
        alignItems: 'center',
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    postUsername: {
        marginRight: 5,
        fontSize: 14,
    },
    postTime: {
        fontSize: 14,
        color: "#A7B0C0",
        marginRight: 5,
    },
    postCategoryContainer: {
        flexDirection: 'row',
    },
    postBody: {
        marginTop: 10,
        marginBottom: 10,
    },
    postFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '23%',
    },
    postButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    count: {
        color: "#A7B0C0",
        marginLeft: 2,
    }
})