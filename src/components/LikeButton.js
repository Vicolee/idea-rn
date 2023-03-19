import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory'

export default LikeButton = (props) => {
    if (props.liked) {
        // TODO: add filled coloring to it
        return <Image source={require('./assets/favicon.png')} />
    }
    return <Image source={require('./assets/waterdrop.png')} />
}