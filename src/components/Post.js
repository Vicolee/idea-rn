import CommentButton from "./CommentButton";
import LikeButton from "./LikeButton";

export default Post = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {displayPostHeader(props)}
            {displayPostBody(props)}
            {displayPostFooter(props)}
        </View>
    );
}

const displayPostHeader = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <View>
                <Text>{props.user}</Text>
                <Text>{props.timeAgo}</Text>
                {displayCategories()}
            </View>
        </View>
    );
}

const displayPostBody = (props) => {
    return <Text>{props.postContent}</Text>
}

const displayPostFooter = (props) => {
    return (
        <View>
            {/* TODO: Make LikeButton liked take user's status of liking the post */}
            <LikeButton liked={False}/>
            <Text>{props.likesCount}</Text>
            <CommentButton />
            <Text>{props.commentsCount}</Text>
        </View>
    );
}