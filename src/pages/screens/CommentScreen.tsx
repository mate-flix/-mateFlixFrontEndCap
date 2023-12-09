import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const CommentScreen: React.FC = () => {
  const [comment, setComment] = useState<string>("");

  const handlePostComment = () => {
    // Implement logic to post the comment
    console.log("Comment posted:", comment);
    // Clear the comment input after posting
    setComment("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../pages/images/mezieprofile.png")}
        style={styles.image2}
      />
      <Text style={styles.profileName}>Agent Chimezie</Text>
      <Text style={styles.about}>Newly rennovated apartment available!!</Text>
      <Image
        source={require("../../pages/images/House1.png")}
        style={styles.image}
      />
      <View style={styles.commentBar}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={comment}
          onChangeText={(text) => setComment(text)}
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePostComment}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    bottom: 189,
  },
  image: {
    width: 370,
    height: 300,
    bottom: 0,
    top: 0,
  },
  image2: {
    width: 73,
    height: 68,
  },
  profileName: {
    justifyContent: "center",
  },
  about: {
    justifyContent: "center",
  },
  commentBar: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 15,
    width: "100%",
  },
  commentInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  postButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "black",
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CommentScreen;
