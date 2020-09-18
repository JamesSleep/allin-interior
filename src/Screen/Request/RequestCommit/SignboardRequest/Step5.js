import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { _WIDTH, nonActive, buttonColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const DETAIL_STYLES = [
  { name: "채널간판", image: require("../../../../Image/channel.jpg") },
  { name: "스카시간판", image: require("../../../../Image/scarcy.png") },
  { name: "플렉스간판", image: require("../../../../Image/flex.png") },
  { name: "네온간판", image: require("../../../../Image/neon.png") },
  { name: "기타", image: require("../../../../Image/etc.png") },
];

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="간판의 상세 종류"
        text2="를 선택해주세요"
      />
      <View style={styles.content}>
        { DETAIL_STYLES.map((style, index) => (
          <View
            key={index}
            style={{ alignItems: "center" }}
          >
            <TouchableOpacity
              style={[
                styles.picker,
                state.detailStyle === style.name && 
                { borderWidth: 1, borderColor: buttonColor }
              ]}
              onPress={()=>setState({
                ...state,
                detailStyle: style.name
              })}
            >
              <Image 
                source={style.image}
                style={{ width: "100%", height: "100%" }}
              />
              { state.detailStyle === style.name &&  
                <View style={styles.cover}/>}
            </TouchableOpacity>
            <Text style={[
              styles.text, 
              state.detailStyle === style.name && { color: buttonColor }
            ]}>
              {style.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 6,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  picker: {
    width: _WIDTH*0.38,
    height: _WIDTH*0.3,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: "black"
  },
  cover: {
    width: "100%", 
    height: "100%", 
    position: "absolute", 
    backgroundColor: "rgba(0,0,0,0.7)", 
    zIndex: 1
  }
});