import React, { useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, nonActive, _WIDTH } from "../../../theme";

export default (props) => {
  //props.route?.name
  const [tabSwipe, setTabSwipe] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View 
        style={{ 
          flexDirection: "row", 
          justifyContent: "center", 
          alignItems: "center",
          marginVertical: 10
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 15 }}
          onPress={()=>setTabSwipe(true)}
        >
          <Text style={{ fontSize: 11, color: tabSwipe?"black":nonActive }}>많이 구매한 상품</Text>
        </TouchableOpacity>
        <View style={{ width: 1, height: "100%", borderWidth: 0.3 }} />
        <TouchableOpacity
          style={{ marginLeft: 15 }}
          onPress={()=>setTabSwipe(false)}
        >
          <Text style={{ fontSize: 11, color: !tabSwipe?"black":nonActive }}>리뷰가 좋은 상품</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal>
        <View style={{width: _WIDTH*0.25, height: "100%", justifyContent: "center", alignItems: "center", marginRight: 5 }}>
          <Image source={require("../../Image/product1.jpeg")} style={{width:"100%", height: _WIDTH*0.25, borderRadius: 10 }} resizeMode="cover"/>
          <Text style={{ fontSize: 9 }} >[최고 조회수/ 구매상품]</Text>
          <Text style={{ fontSize: 9 }}>상품명</Text>
          <Text style={{ fontSize: 9, marginTop: 10 }}>상품가격</Text>
        </View>
        <View style={{width: _WIDTH*0.3, height: "100%", justifyContent: "center", alignItems: "center", marginRight: 5 }}>
          <Image source={require("../../Image/product2.jpeg")} style={{width:"100%", height: _WIDTH*0.25, borderRadius: 10 }} resizeMode="cover"/>
          <Text style={{ fontSize: 9 }} >[최고 조회수/ 구매상품]</Text>
          <Text style={{ fontSize: 9 }}>상품명</Text>
          <Text style={{ fontSize: 9, marginTop: 10 }}>상품가격</Text>
        </View>
        <View style={{width: _WIDTH*0.3, height: "100%", justifyContent: "center", alignItems: "center", marginRight: 5 }}>
          <Image source={require("../../Image/product3.jpeg")} style={{width:"100%", height: _WIDTH*0.25, borderRadius: 10 }} resizeMode="cover"/>
          <Text style={{ fontSize: 9 }} >[최고 조회수/ 구매상품]</Text>
          <Text style={{ fontSize: 9 }}>상품명</Text>
          <Text style={{ fontSize: 9, marginTop: 10 }}>상품가격</Text>
        </View>
        <View style={{width: _WIDTH*0.3, height: "100%", justifyContent: "center", alignItems: "center", marginRight: 5 }}>
          <Image source={require("../../Image/product4.jpeg")} style={{width:"100%", height: _WIDTH*0.25, borderRadius: 10 }} resizeMode="cover"/>
          <Text style={{ fontSize: 9 }} >[최고 조회수/ 구매상품]</Text>
          <Text style={{ fontSize: 9 }}>상품명</Text>
          <Text style={{ fontSize: 9, marginTop: 10 }}>상품가격</Text>
        </View>
      </ScrollView>
    </View>
  )
}