import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { buttonColor, _WIDTH } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

const STRUCT_LIST = [
  { name: "일반형", icon: require("../../../../Image/general.png") },
  { name: "복층형", icon: require("../../../../Image/double_layer.png") },
  { name: "테라스 있음", icon: require("../../../../Image/terrace.png") },
  { name: "베란다 확장형", icon: require("../../../../Image/veranda.png") },
];
const STRUCT_COUNT = [
  { name: "방", value: "room" },
  { name: "화장실", value: "bath" },
  { name: "베란다", value: "veranda" },
];

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="공간구조와 개수"
        text2="를 선택하세요"
      />
      <View style={styles.content}>
        <Text style={styles.title}>공간구조</Text>
        { STRUCT_LIST.map((struct, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              state.structure === struct.name ?
              styles.select : styles.nonSelect
            ]}
            onPress={()=>setState({
              ...state,
              structure: struct.name
            })}
          >
            <View style={{ width: "30%", alignItems: "center" }}>
              <Image 
                source={struct.icon}
                style={{ width: 40, height: 40, marginRight: 20 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ width: "30%" }}>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>{struct.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Text style={styles.title}>공간 개수</Text>
        { STRUCT_COUNT.map((struct, index)=> (
          <View
            key={index}
            style={{ width: "100%", height: 30, flexDirection: "row", justifyContent: "center", alignItems: "center", marginVertical: 5,  }}
          >
            <Text style={{ width: "30%", fontSize: 14, textAlign: "center" }}>{struct.name}</Text>
            <View style={styles.handler}>
              <TouchableOpacity
                onPress={()=>setState({
                  ...state,
                  [struct.value]: state[struct.value] < 1 ? 0 : state[struct.value] - 1
                })}
              >
                <AntDesign name="minus" size={_WIDTH/32} />
              </TouchableOpacity>
              <Text>{state[struct.value]}</Text>
              <TouchableOpacity
                onPress={()=>setState({
                  ...state,
                  [struct.value]: state[struct.value] + 1
                })}
              >
                <AntDesign name="plus" size={_WIDTH/32} />
              </TouchableOpacity>
            </View>
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
    paddingHorizontal: _WIDTH/12,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginVertical: 15,
  },
  button: {
    width: _WIDTH-_WIDTH/6,
    height: 50,
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
  },
  handler: {
    width: "55%",
    height: 25,
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 15,
  }
});