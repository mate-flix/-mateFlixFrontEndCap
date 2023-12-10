// SearchBar.tsx
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ensure this import is working

interface SearchBarProps {
  onSearch: () => void; // Add appropriate type for the onSearch function
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSearch}>
        <Icon name="search" size={20} style={styles.icon} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Search Chat Rooms"
        placeholderTextColor="#888"
        autoCapitalize="none"
        autoCorrect={false}
        // Add additional props or styling as needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 10,
  },
  icon: {
    marginRight: 8,
    color: '#555',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default SearchBar;
