// Main.tsx
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../../layout/Header';
import SearchBar from '../../components/search';
import ChatRoomList from '../../components/chatRoomList';

interface ChatRoom {
  id: number;
  name: string;
  image: string;
  description: string;
}


const Main: React.FC = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  useEffect(() => {
    // Fetch chat room data from your Spring Boot API and update state
    // Replace the URL and headers with your actual API endpoint and headers
    fetch('YOUR_API_ENDPOINT', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed (e.g., authorization)
      },
    })
      .then((response) => response.json())
      .then((data) => setChatRooms(data))
      .catch((error) => console.error('Error fetching chat rooms:', error));
  }, []);

  const handleMenuPress = useCallback(() => {
    // Implement logic for menu press
  }, []);

  const handlePlusPress = useCallback(() => {
    // Implement logic for plus press
  }, []);

  const handleChatRoomPress = useCallback((chatRoom: ChatRoom) => {
    // Implement logic for chat room press
    console.log('Pressed Chat Room:', chatRoom);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="VIRTUAL CAMPUS" onMenuPress={handleMenuPress} onPlusPress={handlePlusPress} />
      <SearchBar onSearch={() => {}} />
      <ChatRoomList data={chatRooms} onChatRoomPress={handleChatRoomPress} />
      {/* Add other components as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
