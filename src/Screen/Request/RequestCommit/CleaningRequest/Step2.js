import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { buttonColor, _WIDTH } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const STRUCT_LIST = [
  { name: "아파트", icon: require("../../../../Image/apart.png") },
  { name: "단독주택", icon: require("../../../../Image/house.png") },
  { name: "빌라/연립", icon: require("../../../../Image/villa.png") },
  { name: "오피스텔", icon: require("../../../../Image/efficiency_apartment.png") },
  { name: "사무실", icon: require("../../../../Image/office.png") },
  { name: "상가", icon: require("../../../../Image/shop.png") },
  { name: "공장", icon: require("../../../../Image/factory.png") },
];

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="공간넓이와 공간종류"
        text2="를 선택해주세요"
      />
      <View style={styles.content}>
        <Text style={styles.title}>공간 넓이</Text>
        <View style={styles.area}>
          <TextInput 
            style={styles.input}
          />
          <Text style={styles.areaText}>평</Text>
        </View>
        <Text style={styles.title}>공간종류</Text>
        <View style={styles.buttonColumn}>
          { STRUCT_LIST.map((struct, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                state.category === struct.name ?
                styles.select : styles.nonSelect
              ]}
              onPress={()=>setState({
                ...state,
                category: struct.name
              })}
            >
              <Image 
                source={struct.icon}
                style={{
                  width: 30,
                  height: 30,
                  marginRight: 10,
                }}
              />
              <Text style={{ fontSize: 13 }}>{struct.name}</Text>
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
    paddingHorizontal: _WIDTH/12,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
  },
  area: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 30,
  },
  areaText: {
    fontSize: 15,
    fontWeight: "400"
  },
  input: {
    width: "20%",
    fontSize: 15,
    textAlign: "center"
  },
  buttonColumn: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: _WIDTH* 0.35,
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
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