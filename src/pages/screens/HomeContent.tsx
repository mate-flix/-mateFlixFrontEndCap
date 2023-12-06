import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const HomeContent: React.FC = () => {
  const [likeCount1, setLikeCount1] = useState<number>(0);
  const [isLiked1, setIsLiked1] = useState<boolean>(false);

  const [likeCount2, setLikeCount2] = useState<number>(0);
  const [isLiked2, setIsLiked2] = useState<boolean>(false);

  const [likeCount3, setLikeCount3] = useState<number>(0);
  const [isLiked3, setIsLiked3] = useState<boolean>(false);

  const [likeCount4, setLikeCount4] = useState<number>(0);
  const [isLiked4, setIsLiked4] = useState<boolean>(false);

  const navigation = useNavigation();

  const handleLikePress1 = () => {
    setIsLiked1((prevIsLiked) => !prevIsLiked);
    setLikeCount1((prevLikeCount) =>
      isLiked1 ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };

  const handleLikePress2 = () => {
    setIsLiked2((prevIsLiked) => !prevIsLiked);
    setLikeCount2((prevLikeCount) =>
      isLiked2 ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };

  const handleLikePress3 = () => {
    setIsLiked3((prevIsLiked) => !prevIsLiked);
    setLikeCount3((prevLikeCount) =>
      isLiked3 ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };

  const handleLikePress4 = () => {
    setIsLiked4((prevIsLiked) => !prevIsLiked);
    setLikeCount4((prevLikeCount) =>
      isLiked4 ? prevLikeCount - 1 : prevLikeCount + 1
    );
  };

  const handleCommentPress = () => {
    // Navigate to the CommentScreen when the Comment button is pressed
    navigation.navigate("Comment");
  };

  const handleSharePress = () => {
    // Navigate to the ShareScreen when the Share button is pressed
    navigation.navigate("Share");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Image
          source={require("../../pages/images/mezieprofile.png")}
          style={styles.image3}
        />
        <Text style={styles.profileName}>Agent Chimezie</Text>
        <Text style={styles.about}>Newly renovated apartment available!!</Text>
        <Image
          source={require("../../pages/images/House1.png")}
          style={styles.image}
        />
        <Image
          source={require("../../pages/images/TessyJohnProfile.png")}
          style={styles.image4}
        />
        <Text style={styles.profileName1}>Tessy John</Text>
        <Text style={styles.about1}>
          Hey guys, I need a roommate of the same interest in this apartment
        </Text>
        <Image
          source={require("../../pages/images/House2.png")}
          style={styles.image2}
        />
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleLikePress1}
          >
            <Icon
              name={isLiked1 ? "heart" : "heart-outline"}
              size={20}
              color={isLiked1 ? "red" : "black"}
            />
            <Text style={styles.iconText}>{likeCount1} Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleCommentPress}
          >
            <Icon name="comment" size={20} color="black" />
            <Text style={styles.iconText}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleSharePress}
          >
            <Icon name="share" size={20} color="black" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleLikePress2}
          >
            <Icon
              name={isLiked2 ? "heart" : "heart-outline"}
              size={20}
              color={isLiked2 ? "red" : "black"}
            />
            <Text style={styles.iconText}>{likeCount2} Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleCommentPress}
          >
            <Icon name="comment" size={20} color="black" />
            <Text style={styles.iconText}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleSharePress}
          >
            <Icon name="share" size={20} color="black" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.overlay2}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleLikePress3}
          >
            <Icon
              name={isLiked3 ? "heart" : "heart-outline"}
              size={20}
              color={isLiked3 ? "red" : "black"}
            />
            <Text style={styles.iconText}>{likeCount3} Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleCommentPress}
          >
            <Icon name="comment" size={20} color="black" />
            <Text style={styles.iconText}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleSharePress}
          >
            <Icon name="share" size={20} color="black" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.overlay2}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleLikePress4}
          >
            <Icon
              name={isLiked4 ? "heart" : "heart-outline"}
              size={20}
              color={isLiked4 ? "red" : "black"}
            />
            <Text style={styles.iconText}>{likeCount4} Likes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleCommentPress}
          >
            <Icon name="comment" size={20} color="black" />
            <Text style={styles.iconText}>Comment</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleSharePress}
          >
            <Icon name="share" size={20} color="black" />
            <Text style={styles.iconText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: "relative",
  },
  content: {
    padding: 20,
    width: width - 40,
  },
  image: {
    width: 370,
    height: 300,
  },
  image2: {
    width: 370,
    height: 400,
    bottom: 0,
    top: 90,
  },
  profileName: {
    position: "absolute",
    left: 105,
    fontSize: 20,
    fontFamily: "bold",
  },
  about: {
    position: "absolute",
    left: 105,
    bottom: 0,
    top: 50,
  },
  profileName1: {
    position: "absolute",
    left: 105,
    fontSize: 20,
    fontFamily: "bold",
    top: 458,
    bottom: 500,
  },
  about1: {
    position: "absolute",
    left: 105,
    top: 488,
    bottom: 600,
  },
  image3: {
    width: 73,
    height: 68,
  },
  image4: {
    width: 73,
    height: 68,
    bottom: 8,
    top: 65,
  },
  overlay: {
    position: "absolute",
    bottom: 200,
    top: 400,
    left: 10,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent", // Adjust the background color and opacity as needed
    paddingVertical: 8,
  },
  overlay2: {
    position: "absolute",
    bottom: 800,
    top: 950,
    left: 10,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    paddingVertical: 8,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
  },
});

export default HomeContent;
