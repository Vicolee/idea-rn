
import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../redux-hooks/post/postSlice';
import CategoryItem from '../components/CategoryItem';
import CATEGORIES from '../constants/Categories';
import Post from '../components/Post';

const HomeScreen = (props) => {

  const posts = useSelector(selectAllPosts);
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const displayCategories = () => {
    // create a list of view of categories
    // TODO: convert ScrollView to FlatList for lazy loading
    return (
      <ScrollView horizontal={true} style={styles.categoryList}>
        {CATEGORIES.map((category) => {
            return (
              <CategoryItem 
                category={category}
                onPress={onPressCategory}
                isSelected={selectedCategory === category.key}
              />
            )
          })
        }
      </ScrollView>
    );
  }

  const onPressCategory = (categoryKey) => {
    setSelectedCategory(categoryKey);
    console.log('clicked category key: ' + selectedCategory)
  }
  
  const onPressCreate = () => {
    console.log('clicked create');
    props.navigation.navigate("CreatePost");
  }

  const displayAllPosts = () => {
    return (
      <ScrollView style={styles.postContainer}>
        {posts.map((post, idx) => {
          return (
            <Post post={post} key={idx}/>
          )
        })}
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      {displayCategories()}
      {displayAllPosts()}
      <TouchableOpacity onPress={onPressCreate} style={styles.newPostButtonWrapper}>
        <Image source={require('../../assets/plus-icon.png')} style={styles.newPostButton} />
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  categoryList: {
    margin: 10,
  },
  postContainer: {
    width: '100%',
  },
  newPostButtonWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: 310,
  },
  newPostButton: {
    width: 64,
    height: 64,
  }
});

export default HomeScreen;