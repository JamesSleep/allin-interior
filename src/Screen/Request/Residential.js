import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { backgroundColor, _WIDTH, nonActive } from "../../../theme";

export default function Residential({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* 추천 카테고리1 */}
      <View style={styles.previewContainer}>
        <View style={styles.previewTitleView}>
          <Text style={styles.subTitle}>실시간 추천하는</Text>
          <Text style={styles.title}>30평대 아파트 인테리어</Text>
        </View>
        <View style={styles.imageSlider}>
          <ScrollView horizontal nestedScrollEnabled>
            <Image source={require("../../Image/example1.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example2.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example3.jpg")} style={styles.image} resizeMode="cover" />
          </ScrollView>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>현대식 세련된 느낌, 모던 인테리어</Text>
          <Text style={styles.contentText2}>30개 이상의 성공사례</Text>
        </View>
      </View>
      {/* 추천 카테고리2 */}
      <View style={styles.previewContainer}>
        <View style={styles.previewTitleView}>
          <Text style={styles.title}>가족의 꿈과 미래가 크는 아이방</Text>
        </View>
        <View style={styles.imageSlider}>
          <ScrollView horizontal nestedScrollEnabled>
            <Image source={require("../../Image/example1.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example2.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example3.jpg")} style={styles.image} resizeMode="cover" />
          </ScrollView>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>아이방 인테리어</Text>
          <Text style={styles.contentText2}>30개 이상의 성공사례</Text>
        </View>
      </View>
      {/* before & after */}
      <View style={styles.previewContainer}>
        <View style={styles.previewTitleView}>
          <Text style={styles.subTitle}>남다른 공간</Text>
          <Text style={styles.title}>Before & After</Text>
        </View>
        <View style={styles.imageSlider}>
          <ScrollView horizontal nestedScrollEnabled>
            <Image source={require("../../Image/example1.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example2.jpg")} style={styles.image} resizeMode="cover" />
            <Image source={require("../../Image/example3.jpg")} style={styles.image} resizeMode="cover" />
          </ScrollView>
        </View>
        <View style={styles.contentView}>
          <Text style={styles.contentText}>이태원같은 부산 해운대구 반여동 30평 아파트</Text>
          <Text style={styles.contentText2}>부산 해운대구 반여동 그린아파트</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: backgroundColor
  },
  previewContainer: {
    width: "100%",
    height: 280,
  },
  previewTitleView: {
    flex: 1.5,
    width: "100%",
    justifyContent: "flex-end",
    paddingHorizontal: 5,
    paddingBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600"
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 5,
  },
  imageSlider: {
    flex: 3,
    width: "100%",
    marginVertical: 5,
  },
  image: {
    width: _WIDTH * 0.8,
    height: "100%",
    borderRadius: 5,
    marginRight: 20,
  },
  contentView: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  contentText: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  contentText2: {
    fontSize: 14,
    fontWeight: "500",
    color: nonActive
  }
})