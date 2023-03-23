import { Image } from 'react-native';

export default LikeButton = (props) => {
    if (props.liked) {
        // TODO: add filled coloring to it
        return <Image source={require('../../assets/favicon.png')} />
    }
    return <Image source={require('../../assets/waterdrop-empty.png')} />
}