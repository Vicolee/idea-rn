
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import CATEGORIES from '../constants/Categories';

const displayCategories = () => {
  // create a list of view of categories
  return (
    <ScrollView horizontal={true} style={styles.categoryList}>
      {CATEGORIES.map((category) => {
          return (
            <CategoryItem category={category} key={category}/>
          )
        })
      }
    </ScrollView>
  );
}

export default HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      {displayCategories()}
    </View>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  categoryList: {
    margin: 10,
  }
});
