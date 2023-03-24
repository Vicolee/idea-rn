import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';
import CategoryLabelItem from './CategoryLabelItem';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = (option) => {
    if (selectedOptions.length >= 3 && !selectedOptions.includes(option)) {
        return;
    }
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option))
      if (onSelect) onSelect(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
      if (onSelect) onSelect([...selectedOptions, option]);
    }
  };

  const renderOptions = () => {
    return options.map((option) => (
      <View key={option.key} style={styles.checkboxContainer}>
        <CheckBox
          value={selectedOptions.includes(option.key)}
          onValueChange={() => handleSelect(option.key)}
          style={styles.checkbox}
        />
        <TouchableOpacity onPress={() => handleSelect(option.key)}>
          <Text>{option.value}</Text>
        </TouchableOpacity>
      </View>
    ));
  };

  const convertKeysToValues = (keys) => {
    return keys.map((key) => options.find((option) => option.key === key).value);
  }

  const displaySelectedOptions = () => {
    if (selectedOptions.length) {
      return (
        convertKeysToValues(selectedOptions).map((categoryValue) => { 
            return <CategoryLabelItem category={categoryValue} />
        })
      );
    }
    return <Text>Choose categories (up to 3)</Text>;
  }

  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.container}>
        <View style={styles.selectedOptionsContainer}>
            {displaySelectedOptions()}
        </View>
        <Image style={styles.dropdownButton} source={require("../../assets/dropdown-arrow.png")}></Image>
      </TouchableOpacity>
      {isOpen && <View style={styles.optionsContainer}>{renderOptions()}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flex: 1,
    alignSelf: 'center',
  },

  container: {
    padding: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#3D8361",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropdownButton: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  selectedOptionsContainer: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    marginTop: 10,
    paddingLeft: 15,
    width: '100%',
    top: 30,
    zIndex: 1,
    opacity: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    marginRight: 10,
  },
});

export default Dropdown;