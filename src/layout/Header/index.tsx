import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You may need to install this library if not already installed

interface HeaderProps {
  title: string;
  onMenuPress: () => void;
  onPlusPress: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onMenuPress, onPlusPress }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuPress = () => {
    setShowMenu(!showMenu);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.menuIconContainer} onPress={onMenuPress}>
        <Icon name="ellipsis-v" size={24} color="#555" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.plusIconContainer} onPress={onPlusPress}>
        <Icon name="plus" size={24} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 60,
    paddingHorizontal: 10,
  },
  menuIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 3,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  plusIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
