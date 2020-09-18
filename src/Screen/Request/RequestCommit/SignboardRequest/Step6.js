import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { _WIDTH, nonActive, buttonColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const DETAIL_STYLES = [
  { name: "전면 프레임", image: require("../../../../Image/frontboard.jpg") },
  { name: "프레임 바", image: require("../../../../Image/framebar.jpg") },
  { name: "맨 벽", image: require("../../../../Image/channel.jpg") },
  { name: "피사드", image: require("../../../../Image/pisard.jpg") },
];

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="시공타입"
        text2="을 선택해주세요"
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
                state.construction === style.name && 
                { borderWidth: 1, borderColor: buttonColor }
              ]}
              onPress={()=>setState({
                ...state,
                construction: style.name
              })}
            >
              <Image 
                source={style.image}
                style={{ width: "100%", height: "100%" }}
              />
              { state.construction === style.name &&  
                <View style={styles.cover}/>}
            </TouchableOpacity>
            <Text style={[
              styles.text, 
              state.construction === style.name && { color: buttonColor }
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