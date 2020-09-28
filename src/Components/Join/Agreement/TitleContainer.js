import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { _WIDTH } from "../../../common/theme";

export default () => (
  <View style={styles.contaier}>
    <Text style={styles.head}>
      이용약관 동의
    </Text>
    <Text style={styles.subTitle}>
      아래의 약관에 동의하신 후 서비스를 이용해주세요
    </Text>
  </View>
)

const styles = StyleSheet.create({
  contaier: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  head: {
    fontSize: _WIDTH/18,
    fontWeight: "600",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: _WIDTH/32,
    color: "gray"
  }
})