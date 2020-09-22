import React from "react";
import { View, StyleSheet, Text } from "react-native";

/* 
  공통: 이름, 휴대폰번호, 주소, 요청사항, 공간종류
  주거공간: 공사예정일, 희망완료날짜
  상업공간: 운영상태, 공사예정일, 희망완료날짜, 면적,
  청소: 청소날짜, 이사날짜, 공간구조
  간판: 간판종류 등등
*/

const CONTENT_LIST = [
  { name: "이름", type: "common", value: "userName" },
  { name: "휴대폰 번호", type: "common", value: "phoneNum" },
  { name: "공간 유형", type: "common", value: "" },
  { name: "공사예정일", type: "common", value: "" },
  { name: "예상비용", type: "common", value: "" },
  { name: "희망 공사 완료일", type: "common", value: "" },
  { name: "주소", type: "common", value: "address" },
  { name: "요청사항", type: "common", value: "request" },
];

export default ({ option }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        { CONTENT_LIST.map((content, index) => {
          if(content.type === "common" || content.type === option) {
            return (
              <View
                key={index}
              >
                <Text>{content.name}</Text>
              </View>
            )
          }
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    paddingVertical: 30,
    paddingHorizontal: 30,

  },
  inner: {
    flex: 1,
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: "gray",
    borderBottomWidth: 0.5,
    borderBottomColor: "gray"
  }
})