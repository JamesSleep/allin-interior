import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../../../common/theme";

const SELECT_TYPE = [
  { name: "입주 청소", icon: require("../../../../Image/in_cleaning.png") },
  { name: "이사 청소", icon: require("../../../../Image/moving_cleaning.png") },
  { name: "인테리어 후 청소", icon: require("../../../../Image/interior_cleaning.png") },
  { name: "정기 청소", icon: require("../../../../Image/regular_cleaning.png") },
  { name: "거주 청소", icon: require("../../../../Image/residential_cleaning.png") },
];

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="청소종류"
        text2="를 선택하세요"
      />
      <View style={styles.content}>
        <View 
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={[
              styles.oneRoom,
              !state.oneRoom ?
              { backgroundColor: buttonColor } :
              { borderWidth: 0.5, borderColor: "gray" }
            ]}
            onPress={()=>setState({
              ...state,
              oneRoom: false
            })}
          >
            <Text 
              style={[
                styles.oneRoomText,
                !state.oneRoom ?
                { color: "white" } : { color: "black"}
              ]}
            >
              일반청소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.oneRoom,
              state.oneRoom ?
              { backgroundColor: buttonColor } :
              { borderWidth: 0.5, borderColor: "gray" }
            ]}
            onPress={()=>setState({
              ...state,
              oneRoom: true
            })}
          >
            <Text 
              style={[
                styles.oneRoomText,
                state.oneRoom ?
                { color: "white" } : { color: "black"}
              ]}
            >
              원룸 청소</Text>
            <Text 
              style={[
                styles.oneRoomText,
                state.oneRoom ?
                { color: "white" } : { color: "black"}
              ]}
            >
              (소형 청소)
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          { SELECT_TYPE.map((type, index)=>(
            <TouchableOpacity
              key={index}
              style={[
                styles.type,
                type.name === state.cleaningType?
                styles.select : styles.nonSelect
              ]}
              onPress={()=>setState({
                ...state,
                cleaningType: type.name
              })}
            >
              <View style={{ width: "40%", alignItems:"flex-end", paddingRight: 20, }}>
                <Image 
                  source={type.icon}
                  style={{ width: _WIDTH/10, height: _WIDTH/10 }}
                />
              </View>
              <View style={{ width: "60%" }}>
                <Text>{type.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 4,
    paddingHorizontal: _WIDTH/15,
    justifyContent: "center",
  },
  oneRoom: {
    width: _WIDTH*0.4,
    height: _WIDTH*0.17,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  oneRoomText: {
    fontSize: 15,
    fontWeight: "300"
  },
  type: {
    width: _WIDTH*0.7,
    height: _WIDTH*0.13,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 5,
  },
  select: {
    borderColor: buttonColor,
    borderWidth: 1,
  },
  nonSelect: {
    borderColor: "gray",
    borderWidth: 0.5,
  }
});