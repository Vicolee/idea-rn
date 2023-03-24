import React from 'react';
import { View, Text } from 'react-native';
import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";
import CATEGORIES from "../constants/Categories";

export default Post = (props) => {

    const displayPostHeader = () => {
        return (
            <View>
                <Text>{props.post.title}</Text>
                <View>
                    <Text>{props.post.author}</Text>
                    {/* <Text>{props.post.timeAgo}</Text> */}
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
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {displayPostHeader()}
            {displayPostBody()}
            {displayPostFooter()}
        </View>
    );
}