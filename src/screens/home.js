
import React from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import CATEGORIES from '../constants/Categories';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      {displayCategories()}
      <TouchableOpacity onPress={() => onPressCreate(props)} style={styles.newPostButtonWrapper}>
        <Image source={require('../../assets/plus-icon.png')} style={styles.newPostButton} />
      </TouchableOpacity>
    </View>
  );
};

const displayCategories = () => {
  // create a list of view of categories
  // TODO: convert ScrollView to FlatList for lazy loading
  return (
    <ScrollView horizontal={true} style={styles.categoryList}>
      {CATEGORIES.map((category) => {
          return (
            <CategoryItem category={category.value} key={category.key}/>
          )
        })
      }
    </ScrollView>
  );
}

const onPressCreate = (props) => {
  console.log('clicked create');
  props.navigation.navigate("CreatePost");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  categoryList: {
    margin: 10,
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