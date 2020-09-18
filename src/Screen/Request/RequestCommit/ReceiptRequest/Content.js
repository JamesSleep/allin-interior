import React from "react";
import { View, StyleSheet } from "react-native";

/* 
  공통: 이름, 휴대폰번호, 주소, 요청사항, 공간종류
  주거공간: 공사예정일, 희망완료날짜
  상업공간: 운영상태, 공사예정일, 희망완료날짜, 면적,
  청소: 청소날짜, 이사날짜, 공간구조
  간판: 간판종류 등등
*/

const CONTENT_LIST = [
  { name: "이름", type: "common" },
  { name: "휴대폰 번호", type: "common" },
  { name: "공간 유형", type: "common" },
  { name: "공사예정일", type: "common" },
  { name: "예상비용", type: "common" },
  { name: "희망 공사 완료일", type: "common" },
  { name: "주소", type: "common" },
  { name: "요청사항", type: "common" },
];

export default () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  }
})