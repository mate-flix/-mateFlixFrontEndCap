import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install this library if not already installed

const Footer: React.FC = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handleIconPress('Campus')}>
        <Icon name="university" size={24} color="#555" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handleIconPress('Chats')}>
        <Icon name="comment" size={24} color="#555" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={() => handleIconPress('Mates')}>
        <Icon name="users" size={24} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

const handleIconPress = (iconName: string) => {
  // Implement the logic to navigate or perform actions based on the pressed icon
  console.log(`Pressed ${iconName}`);
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    height: 60,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Footer;
