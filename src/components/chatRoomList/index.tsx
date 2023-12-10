// ChatRoomList.tsx
import React from 'react';
import { View, FlatList, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface ChatRoom {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface ChatRoomListProps {
  data: ChatRoom[];
  onChatRoomPress: (chatRoom: ChatRoom) => void;
}

const ChatRoomList: React.FC<ChatRoomListProps> = ({ data, onChatRoomPress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onChatRoomPress(item)}>
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.chatImage} />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatDescription}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatDescription: {
    color: '#888',
  },
});

export default ChatRoomList;
