import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../common/theme";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons";

export default ({ navigation, logout }) => {
  const [MENU_LIST, setMENU_LIST] = useState([
    { name: "내가 쓴 리뷰", icon: "calendar-edit", onPress: () => navigation.navigate("MyPage") },
    { name: "내가 쓴 스토리", icon: "book-open-outline", onPress: () => navigation.navigate("MyPage") },
    { name: "견적 요청함", icon: "email-send-outline", onPress: () => navigation.navigate("RequestBox") },
    { name: "로그아웃", icon: "power", onPress: () => logout() }
  ]);
  return (
    <View style={styles.container}>
      { MENU_LIST.map((menu, index) => (
        <View
          key={index}
          style={styles.menu}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={menu.onPress}
          >
            <MaterialCom 
              name={menu.icon}
              size={_WIDTH/17}
              color={
                menu.name === "로그아웃" ?
                buttonColor : "#576574"
              }
              style={{ marginRight: _WIDTH/20 }}
            />
            <Text style={[styles.title, menu.name === "로그아웃" && { color: buttonColor }]}>
              {menu.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    borderTopWidth: 7,
    borderTopColor: "#dff9fb"
  },
  menu: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    width: "100%",
    height: "70%",
    flexDirection: "row",
    paddingHorizontal: _WIDTH/20,
    alignItems: "center"
  },  
  title: {
    fontSize: _WIDTH/30,
    fontWeight: "600",
    color: "#576574"
  }
});
