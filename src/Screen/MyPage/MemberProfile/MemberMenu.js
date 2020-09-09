import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import MenuContainer from "../../../Components/MyPage/MenuContainer";
import { buttonColor } from "../../../common/theme";

const styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  naviButton: {
    borderWidth: 1, 
    borderColor: buttonColor, 
    borderRadius: 15, 
    paddingHorizontal: 12,
    paddingVertical: 4
  },
  naviText: {
    fontSize: 13, 
    color: buttonColor
  },
  circle: {
    width: 25, 
    height: 25, 
    backgroundColor: buttonColor, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 50 
  }
});

const menuList = [
  { title: "내 정보", buttonText: "수정하기"},
  { title: "나의 쇼핑", buttonText: "바로가기" },
  { title: "리뷰쓰기", touch: true },
  { title: "내가 쓴 리뷰", touch: true },
  { title: "견적 요청함", touch: true },
  { title: "나의 집들이", touch: true },
];

export default ({ memberPrivate }) => {
  return (
    <View style={styles.container}>
      { menuList.map((menu, index) => {
        if(index < 2) {
          return (
          <MenuContainer key={index} title={menu.title}>
            <TouchableOpacity style={styles.naviButton}>
              <Text style={styles.naviText}>{menu.buttonText}</Text>
            </TouchableOpacity>
          </MenuContainer>
        )}
      })}
      { menuList.map((menu, index) => {
        if(index > 1) {
          return (
          <MenuContainer key={index} title={menu.title} touch={menu.touch}>
            { index === 4 ?
              memberPrivate.request > 0 && (
              <View style={styles.circle}>
                <Text style={{ fontSize: 13, color: "white" }}>
                  {memberPrivate.request}
                </Text>
              </View> ) : (
              <AntDesign name="right" size={20}/>
            )}
          </MenuContainer>
        )}
      })}
    </View>
  )
}