import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import CATEGORIES from "../constants/Categories";
import timeAgo from "../helpers/timeAgo";
import { useSelector } from 'react-redux';

export default Post = (props) => {

    const user = useSelector((state) => state.user.all.find(user => user.email === props.post.author));

    const displayPostHeader = () => {
        return (
            <View>
                <Text>{props.post.title}</Text>
                <View>
                    <Text>{user.username}</Text>
                    {/* TODO: Convert createdAt to timeAgo */}
                    <Text>{timeAgo(props.post.createdAt)}</Text>
                    {displayPostCategories()}
                </View>
            </View>
        );
    }

    const displayPostCategories = () => {
        return (
            <View>
                {props.post.categories.map((idx) => {
                    console.log(CATEGORIES[idx].value)
                    return (
                        <Text>{CATEGORIES[idx].value}</Text>
                    );
                })}
            </View>
        )
    }
    
    const displayPostBody = () => {
        return <Text>{props.post.postBody}</Text>
    }
    
    const displayPostFooter = () => {
        return (
            <View>
                {/* TODO: Make LikeButton liked take user's status of liking the post */}
                <LikeButton liked={false} />
                <Text>{props.post.likedBy.length}</Text>
                <CommentButton />
                {/* <Text>{props.commentsCount}</Text> */}
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
    }
})