import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { nonActive, _WIDTH } from "../../../common/theme";
import { workAddress } from "../../../common/workAddress";
import { completeCount } from "../../../Components/Company/completeCount";

export default ({ joinInfo, area }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>대표명</Text>
        <Text style={styles.text}>{joinInfo.co_ceoname}</Text>
        <Text style={styles.tier}>{completeCount(joinInfo.co_work_count)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>업력</Text>
        <Text style={styles.text}>12년</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>시공지역</Text>
        <Text style={styles.text}>{workAddress(area)}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>시공횟수</Text>
        <Text style={styles.text}>{`${joinInfo.co_work_count}회`}</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Image 
          source={require("../../../Image/star.png")} 
          style={{ width: _WIDTH/20, height: _WIDTH/20, marginRight: 5 }} 
          resizeMode="contain" 
        />
        <Text style={{ fontSize: 14, }}>
          4.9 (13)
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center"
  },
  title: {
    width: 80,
    fontSize: 14,
    color: "gray",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
  },
  tier: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
    fontSize: 13,
    color: "white",
    backgroundColor: "#7597EE"
  },
  scoreContainer: {
    width: 120,
    height: 40,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 0,
    top: 0,
  }
})