import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { _WIDTH } from "../../../common/theme";

export default () => (
  <View style={styles.contaier}>
    <Text style={styles.head}>
      본인 인증
    </Text>
    <Text style={styles.subTitle}>
      올인 서비스를 이용하시려면 본인인증이 필요합니다.
    </Text>
    <Text style={styles.subTitle}>
      본인인증은 최초 1회만 필요합니다.
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