import React from "react";
import { ScrollView, Text, View, Image, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import { renderPagination } from "../../Components/Main/RederPagination";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { _HEIGHT, nonActive, backgroundColor, buttonColor } from "../../common/theme";
import BestShop from "./BestShop";

const Tab = createMaterialTopTabNavigator();

const iconMenu = [
  { name: "올인 쇼핑", icon: require("../../Image/shopping.png"), route: "Shopping" }, 
  { name: "집들이", icon: require("../../Image/gift.png"), route: "Shopping" }, 
  { name: "청소", icon: require("../../Image/cleaning.png"), route: "Shopping" }, 
  { name: "간판시공", icon: require("../../Image/signboard.png") , route: "Shopping"}, 
  { name: "주거공간", icon: require("../../Image/residence.png"), route: "Shopping" }, 
  { name: "상가공간", icon: require("../../Image/mall.png"), route: "Shopping" }, 
  { name: "건설공간", icon: require("../../Image/construction.png"), route: "Shopping" },
];

const Recommend = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: backgroundColor }} contentContainerStyle={{ paddingBottom: 10 }}>
      {/* 배너 슬라이드 */}
      <Swiper height={150} autoplay renderPagination={renderPagination}>
        <View style={styles.slide}>
          <Image source={require("../../Image/example1.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example2.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example3.jpg")} style={styles.image}/>
        </View>
        <View style={styles.slide}>
          <Image source={require("../../Image/example4.jpeg")} style={styles.image}/>
        </View>
      </Swiper>
      {/* 메뉴 모음 */}
      <View style={{ width: "100%", height: 180, paddingHorizontal: 20, paddingVertical: 15 }}>
        <View style={{ width: "100%", height: "100%", borderRadius: 5, borderWidth: 0.7, borderColor: nonActive }}>
          <View style={styles.menuLayout}>
            { iconMenu.map((menu, index) => {
              if(index < 4)
                return(
                  <View 
                    style={styles.iconContainer} 
                    key={index}
                    onTouchEnd={()=>navigation.navigate(menu.route)}
                  >
                    <View style={{ width: "100%", height: "80%" }}>
                      <Image source={menu.icon} style={styles.iconImage} resizeMode="contain"/>
                    </View>
                    <Text style={styles.iconText}>{menu.name}</Text>
                  </View>
                )
            })}
          </View>
          <View style={styles.menuLayout}>
            { iconMenu.map((menu, index) => {
              if(index >= 4)
                return(
                  <View style={styles.iconContainer} key={index}>
                    <View style={{ width: "100%",height: "70%" }}>
                      <Image source={menu.icon} style={styles.iconImage} resizeMode="contain"/>
                    </View>
                    <Text style={styles.iconText}>{menu.name}</Text>
                  </View>
                )
            })}
          </View>
        </View>
      </View>
      {/* 견적신청 버튼 */}
      <View style={{ width: "100%", height: 40, paddingHorizontal: 20, marginVertical: 15 }}>
        <TouchableOpacity
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15,
            backgroundColor: "#FB9046",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 15, color: "white" }}>견적신청</Text>
        </TouchableOpacity>
      </View>
      {/* 한 주 베스트 스토리 */}
      <View style={{ width: "100%", height: 250, paddingHorizontal: 20, marginVertical: 10 }}>
        <View style={{ width: "100%", height: "100%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>한 주 베스트 스토리</Text>
            <TouchableOpacity>
              <Text style={{ color: buttonColor, fontSize: 12 }}>+ 스토리 더보기</Text>
            </TouchableOpacity>
          </View>
          {/* 베스트 이미지 */}
          <View style={{ width: "100%", height: "100%", marginTop: 10 }}>
            {/* best1 */}
            <View style={{ flex: 1, marginBottom: 1 }}>
              <Image source={require("../../Image/example1.jpg")} style={{ width: "100%", height: "100%", borderRadius: 5 }}/>
            </View>
            {/* best 2, 3 */}
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image source={require("../../Image/example2.jpg")} style={{ width: "50%", height: "100%", borderRadius: 5, marginRight: 0.5 }}/>
              <Image source={require("../../Image/example3.jpg")} style={{ width: "50%", height: "100%", borderRadius: 5, marginLeft: 0.5 }}/>
            </View>
          </View>
        </View>
      </View>
      {/* 베스트 상품 */}
      <View style={{ width: "100%", height: 220, paddingHorizontal: 20, marginTop:40 }}>
        <View style={{ width: "100%", height: "100%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ fontSize: 14, fontWeight: "600" }}>베스트 상품</Text>
            <TouchableOpacity>
              <Text style={{ color: buttonColor, fontSize: 12 }}>+ 상품 더보기</Text>
            </TouchableOpacity>
          </View>
          {/* 카테고리탭 */}
          <View style={{ width: "100%", height: "100%" }}>
            <Tab.Navigator
              swipeEnabled={false}
              tabBarOptions={{
                labelStyle: { fontSize: 13 },
                tabStyle: { height: 40 },
                style: { borderBottomColor: buttonColor },
                indicatorStyle: { backgroundColor: buttonColor },
                activeTintColor: buttonColor,
                inactiveTintColor: "black",
              }}
            >
              <Tab.Screen name="All" component={BestShop} options={{ tabBarLabel: "전체" }}/>
              <Tab.Screen name="Chair" component={BestShop} options={{ tabBarLabel: "종류1" }}/>
            </Tab.Navigator>
          </View>
        </View>
      </View>
      {/* 기타메뉴 */}
      <View style={{ width: "100%", height: 150, marginTop:60 }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: "#F7F7F7", 
              justifyContent: "center", 
              alignItems: "center",
              marginRight: 0.5,
              marginBottom: 0.5
            }}
          >
            <Image source={require("../../Image/event.png")} style={{width: "35%", height: "35%"}} resizeMode="contain"/>
            <Text style={{ fontSize: 10, marginTop: 5 }}>이벤트</Text>
          </View>
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: "#F7F7F7", 
              justifyContent: "center", 
              alignItems: "center",
              marginHorizontal: 0.5,
              marginBottom: 0.5
            }}
          >
            <Image source={require("../../Image/service.png")} style={{width: "35%", height: "35%"}} resizeMode="contain"/>
            <Text style={{ fontSize: 10, marginTop: 5 }}>고객센터</Text>
          </View>
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: "#F7F7F7", 
              justifyContent: "center", 
              alignItems: "center",
              marginLeft: 0.5,
              marginBottom: 0.5
            }}
          >
            <Image source={require("../../Image/story.png")} style={{width: "35%", height: "35%"}} resizeMode="contain"/>
            <Text style={{ fontSize: 10, marginTop: 5 }}>올인 스토리</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: "#F7F7F7", 
              justifyContent: "center", 
              alignItems: "center",
              marginRight: 0.5,
              marginTop: 0.5
            }}
          >
            <Image source={require("../../Image/today_discount.png")} style={{width: "35%", height: "35%"}} resizeMode="contain"/>
            <Text style={{ fontSize: 10, marginTop: 5 }}>오늘의 할인</Text>
          </View>
          <View 
            style={{ 
              flex: 1, 
              backgroundColor: "#F7F7F7", 
              justifyContent: "center", 
              alignItems: "center",
              marginLeft: 0.5,
              marginTop: 0.5
            }}
          >
            <Image source={require("../../Image/partner.png")} style={{width: "35%", height: "35%"}} resizeMode="contain"/>
            <Text style={{ fontSize: 10, marginTop: 5 }}>제휴문의</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  menuLayout: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }, 
  iconContainer: {
    flex: 1,
    width: "80%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center"
  },
  iconText: {
    fontSize: 11,
  },
  iconImage: {
    width: "100%",
    height: "100%"
  }
});

export default Recommend;