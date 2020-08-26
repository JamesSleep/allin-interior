import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { _WIDTH, nonActive, buttonColor } from "../../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
import { renderPagination } from "../../Components/Main/RederPagination";

export default function StoryCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require("../../Image/logo.png")} 
          style={styles.profileImage}
        />
        <Text style={{ marginLeft: 15, fontSize: 16 }}>닉네임</Text>
        <TouchableOpacity
          style={{
            marginLeft: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: buttonColor,
            paddingHorizontal: 5,
            paddingVertical: 2,
          }}
        >
          <Text style={{ fontSize: 13, color: buttonColor }}>+팔로우</Text>
        </TouchableOpacity>
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
      <Swiper
        height={220}
        renderPagination={renderPagination}
      >
        <View style={{ flex: 1 }}>
          <Image source={require("../../Image/example1.jpg")} style={{ width: "100%", height: "100%" }}/>
        </View>
        <View style={{ flex: 1 }}>
          <Image source={require("../../Image/example2.jpg")} style={{ width: "100%", height: "100%" }}/>
        </View>
      </Swiper>
      <View style={styles.cotentView}>
        <View style={styles.contentIcon}>
          
        </View>
        <View style={styles.contentLike}>

        </View>
        <View style={styles.contentText}>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 400,
  },
  header: {
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
  cotentView: {
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
  iconImage: {
    width: _WIDTH/11,
    height: _WIDTH/11,
    marginRight: 10,
  },
  shareIcon: {
    width: _WIDTH/11,
    height: _WIDTH/11,
    position: "absolute",
    right: 10,
  },
  contentLike: {
    flex: 1,
    
  },
  contentText: {
    flex: 1,
    
  }
});
