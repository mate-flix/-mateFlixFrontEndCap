import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = () => {
  const navigation = useNavigation();
  const [isSideNavVisible, setSideNavVisible] = useState(false);

  const toggleSideNav = () => {
    setSideNavVisible(!isSideNavVisible);
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
      <TouchableOpacity onPress={toggleSideNav}>
        <Text style={{ fontSize: 24 }}>...</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>VirtualCampus</Text>
      {/* Placeholder for the three dots icon */}
      <View style={{ width: 30 }}></View>

      {/* Side Navigation */}
      {isSideNavVisible && (
        <View style={{ position: 'absolute', top: 0, left: 0, width: '70%', backgroundColor: 'white', padding: 10 }}>
          <TouchableOpacity onPress={() => console.log('Navigate to Profile')}>
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Navigate to Settings')}>
            <Text>Settings</Text>
          </TouchableOpacity>
          {/* Add other side nav options here */}
        </View>
      )}
    </View>
  );
};

export default HeaderComponent;
