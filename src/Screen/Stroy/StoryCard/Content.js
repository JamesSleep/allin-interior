import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default ({ content }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <Ionicons 
          name="heart-sharp" 
          size={30} 
          color="red" 
          style={{ marginRight: 15 }} 
        />
        {/* <Ionicons name="heart-outline" size={30} /> */}
        <Ionicons 
          name="chatbox-ellipses-outline" 
          size={30} 
        />
        <AntDesign 
          name="sharealt" 
          size={25} 
          style={{ position: "absolute", right: 10 }} 
        />
      </View>
      <View style={styles.contentLike}>
        <Text style={{ fontSize: 15, fontWeight: "300" }} >좋아요   8개</Text>
      </View>
      <View style={styles.contentText}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{ fontSize: 14, fontWeight: "400" }}
        >
          {content}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    paddingHorizontal: 25,
  },
  contentIcon: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  contentLike: {
    flex: 1,
    justifyContent: "center"
  },
  contentText: {
    flex: 1,
    justifyContent: "center",
  }
});