import { Image } from 'react-native';

export default LikeButton = (props) => {
    if (props.liked) {
        // TODO: add filled coloring to it
        return <Image source={require('../../assets/favicon.png')} style={{width: 20, height: 20}} />
    }
    return <Image source={require('../../assets/waterdrop-empty.png')} style={{width: 20, height: 20}} />
}
