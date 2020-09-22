import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { imageLoad } from "../../../common/imageLoad";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, nonActive, _WIDTH } from "../../../common/theme";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default ({ profileImg, nickname, storyID, userID }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={
          profileImg ?
          { uri: imageLoad(profileImg) } :
          require("../../../Image/logo.png")
        }
        style={styles.profileImage}
      />
      <Text style={styles.nick}>{nickname}</Text>
      { storyID !== userID && (
        <TouchableOpacity
          style={styles.follow}
        >
          <Text style={styles.followText}>+팔로우</Text>
        </TouchableOpacity>
      )}
      <MaterialComIcons 
          name="dots-vertical"
          size={30}
          color={nonActive}
          style={{
            position: "absolute",
            right: 10,
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 65,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: _WIDTH/8,
    height: _WIDTH/8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: nonActive,
  },
  nick: {
    marginLeft: 15,
    fontSize: 16
  },
  follow: {
    marginLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: buttonColor,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  followText: {
    fontSize: 13, 
    color: buttonColor
  }
});