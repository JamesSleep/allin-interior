import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { nonActive, _WIDTH, } from "../../common/theme";
import Swiper from "react-native-swiper";
import { renderPagination } from "../Main/RederPagination";

export default  () => {
  return (
    <View style={styles.container}>
      {/* 업체정보 */}
      <View style={styles.infoContainer}>
        {/* 프로필사진 */}
        <View style={styles.imageView}>
          <View 
            style={{ 
              width: _WIDTH/10,
              height: _WIDTH/10,
              borderRadius: 50,
              borderColor: nonActive,
              borderWidth: 0.5,
              overflow: "hidden"
            }}
          >
            <Image 
              source={require("../../Image/logo.png")} 
              style={{ 
                width: _WIDTH/10,
                height: _WIDTH/10,
              }} 
              resizeMode="contain" 
            />
          </View>
        </View>
        {/* 업체정보텍스트 */}
        <View style={styles.textView}>
          <View style={{ flex: 1.5, flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "500", marginRight: 7, }}>
              업체명
            </Text>
            <Text 
              style={{ 
                fontSize: 11, 
                fontWeight: "400", 
                backgroundColor: "#7597EE", 
                paddingHorizontal: 7,
                paddingVertical: 1, 
                borderRadius: 5,
                color: "white"
              }}
            >
              명장
            </Text>
          </View>
          <Text style={{ flex: 1, fontSize: 11, fontWeight: "400" }}>주거공간 종합시공</Text>
          <Text style={{ flex: 1, fontSize: 11, fontWeight: "400" }}>시공 횟수 21회 지역: 부산</Text>
        </View>
        {/* 평점 */}
        <View style={styles.recordView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image 
              source={require("../../Image/star.png")} 
              style={{ width: _WIDTH/20, height: _WIDTH/20, marginRight: 5 }} 
              resizeMode="contain" 
            />
            <Text style={{ fontSize: 14, }}>
              4.9 (13)
            </Text>
          </View>
        </View>
      </View>
      {/* 사진 */}
      <View style={styles.imageContainer}>
        <Swiper height="100%" renderPagination={renderPagination} >
          <View style={{ flex: 1, }}>
            <Image 
              source={require("../../Image/company2.jpeg")} 
              style={{ width: "100%", height: "100%", }}
              resizeMode="stretch"
            />
          </View>
          <View style={{ flex: 1, }}>
            <Image 
              source={require("../../Image/company1.jpeg")} 
              style={{ width: "100%", height: "100%", }}
              resizeMode="stretch"
            />
          </View>
          <View style={{ flex: 1, }}>
            <Image 
              source={require("../../Image/company3.jpeg")} 
              style={{ width: "100%", height: "100%", }}
              resizeMode="stretch"
            />
          </View>
        </Swiper>
      </View>
      {/* 설명 */}
      <View style={styles.description}>
        <Text style={{ fontSize: 13 }}>
          위 업체는 오랜 기간 쌓아온 인테리어로서 주거공간을 전문적으로 디자인하고...
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 250,
    marginVertical: 15,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 0 },
    elevation: 5,
  },
  infoContainer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textView: {
    flex: 4,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  recordView: {
    flex: 2,
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingRight: 10,
  },
  imageContainer: {
    flex: 3,
  },
  description: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center"
  }
})