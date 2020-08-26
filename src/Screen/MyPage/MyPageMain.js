import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { backgroundColor, _WIDTH, nonActive, buttonColor } from "../../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function MyPageMain({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      {/* 헤더 */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>프로필</Text>
      </View>
      {/* 프로필 정보 */}
      <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
        {/* Profile Image */}
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center",  }}>
          <Image 
            source={require("../../Image/logo.png")} 
            style={{ width: _WIDTH*0.2, height: _WIDTH*0.2, borderRadius: 50, borderWidth: 1, borderColor: nonActive }}  
          />
        </View>
        {/* Profile Info */}
        <View style={{ flex: 3, justifyContent: "center" }}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}>닉네임</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "flex-start", marginTop: 20 }}>
            <Text style={{ fontSize: 14, marginRight: 10 }}>팔로워 0</Text>
            <Text style={{ fontSize: 14, marginRight: 10 }}>팔로잉 0</Text>
            <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
              <Image source={require("../../Image/crown.png")} style={{ width: _WIDTH/15, height: _WIDTH/24 }} resizeMode="cover" />
              <Text style={{ fontSize: 14, marginLeft: 5 }}>x100</Text>
            </View>
          </View>
        </View>
      </View>
      {/* 알림 및 좋아요 */}
      <View 
        style={{ 
          flex: 1.4, 
          flexDirection: "row", 
          justifyContent: "space-around", 
          alignItems: "center", 
          borderTopWidth: 7,
          borderBottomWidth: 7,
          borderColor: "#F1F1F1"
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../Image/notification.png")} style={{ width: _WIDTH/15, height: _WIDTH/17 }} />
          <Text style={{ fontSize: 13, marginTop: 4 }}>알림 2</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../Image/scrap.png")} style={{ width: _WIDTH/15, height: _WIDTH/17 }} />
          <Text style={{ fontSize: 13, marginTop: 4 }}>알림 2</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image source={require("../../Image/like.png")} style={{ width: _WIDTH/15, height: _WIDTH/17 }} />
          <Text style={{ fontSize: 13, marginTop: 4 }}>알림 2</Text>
        </View>
      </View>
      {/* 메뉴 */}
      <View 
        style={{ 
          flex: 8,
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>내 정보</Text>
          <TouchableOpacity
            style={{ 
              borderWidth: 1, 
              borderColor: buttonColor, 
              borderRadius: 15, 
              paddingHorizontal: 12,
              paddingVertical: 7
            }}
          >
            <Text style={{ fontSize: 13, color: buttonColor }}>수정하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.menuContainer}>
          <Text style={styles.menuTitle}>나의 쇼핑</Text>
          <TouchableOpacity
            style={{ 
              borderWidth: 1, 
              borderColor: buttonColor, 
              borderRadius: 15, 
              paddingHorizontal: 12,
              paddingVertical: 7
            }}
          >
            <Text style={{ fontSize: 13, color: buttonColor }}>바로가기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.menuContainer}>
          <Text style={styles.menuTitle}>리뷰쓰기</Text>
          <AntDesign name="right" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContainer}>
          <Text style={styles.menuTitle}>내가 쓴 리뷰</Text>
          <AntDesign name="right" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContainer}>
          <Text style={styles.menuTitle}>견적 요청함</Text>
          <View style={{ width: 25, height: 25, backgroundColor: buttonColor, justifyContent: "center", alignItems: "center", borderRadius: 50 }}>
            <Text style={{ fontSize: 13, color: "white" }}>3</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuContainer}>
          <Text style={styles.menuTitle}>나의 집들이</Text>
          <AntDesign name="right" size={20}/>
        </TouchableOpacity>
        {/* 회원탈퇴 */}
        <View style={{ width:"100%", position: "absolute", left:20, bottom: 15, justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity 
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    height: _WIDTH/8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.5,
    marginBottom: 10
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: "500"
  }
});