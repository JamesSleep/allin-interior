import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { _WIDTH, nonActive, buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialComIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
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
          <Ionicons name="heart-sharp" size={30} color="red" style={{ marginRight: 15 }} />
          {/* <Ionicons name="heart-outline" size={30} /> */}
          <Ionicons name="chatbox-ellipses-outline" size={30} />
          <AntDesign name="sharealt" size={25} style={{ position: "absolute", right: 10 }} />
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
            리액트 네이티브는 페이스북이 개발한 오픈 소스 모바일 애플리케이션 프레임워크이다. 
            안드로이드, iOS, 웹, UWP용 애플리케이션을 개발하기 위해 사용되며, 개발자들이 네이티브 플랫폼 기능과 더불어 리액트를 사용할 수 있게 한다.
            완전하지 않은 Qt 포팅 또한 존재한다.
          </Text>
          {/* 한줄넘어가면 더보기 */}
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
    justifyContent: "center"
  },
  contentText: {
    flex: 1,
    justifyContent: "center",
  }
});
