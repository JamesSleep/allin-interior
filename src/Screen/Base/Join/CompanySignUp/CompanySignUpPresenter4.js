import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { backgroundColor, _WIDTH, buttonColor } from "../../../../common/theme";
import Header from "../../../../Components/Join/SignUp/Header";
import { TouchableOpacity } from "react-native-gesture-handler";

const list = [
  { 
    source: require("../../../../Image/comprehensive.png"),
    text: "종합시공",
    value: "totalConstruction",
  },
  { 
    source: require("../../../../Image/partial_construction.png"),
    text: "부분시공",
    value: "partConstruction",
  },
  { 
    source: require("../../../../Image/residential.png"),
    text: "주거공간",
    value: "residential",
  },
  { 
    source: require("../../../../Image/commercial_space.png"),
    text: "상업공간",
    value: "commercial",
  },
  { 
    source: require("../../../../Image/cleaning.png"),
    text: "청소",
    value: "cleaning",
  },
]

export default ({ signList, value, setValue, step, setStep }) => (
  <View style={styles.container}>
    <Header 
      step={step}
      setStep={setStep}
    />
    <View style={styles.listView}>
      <Text style={{ fontSize: 15, marginBottom: 30 }}>
        가능한 시공을 선택해주세요
      </Text>
      {list.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{ marginBottom: 20 }}
          onPress={() => {
            value[item.value] === "1" ?
            setValue(item.value, "0") :
            setValue(item.value, "1")
          }}
        >
          <View style={
            value[item.value] === "1" ?
            styles.selectButton : styles.nonSelectButton
          }>
            <Image 
              source={item.source}
              style={styles.selectImg}
            />
            <Text style={styles.selectText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View style={styles.submitContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setStep(3)}
      >
        <Text style={styles.text}>다음</Text>
      </TouchableOpacity>
    </View>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  submitContainer: {
    width: "100%",
    height: _WIDTH*0.15,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: _WIDTH*0.85,
    height: _WIDTH*0.11,
    backgroundColor: buttonColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: _WIDTH/25, 
    color: "white",
    fontWeight: "500"
  },
  listView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectButton: {
    width: _WIDTH * 0.8,
    height: 55,
    borderWidth: 2,
    borderColor: buttonColor,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  nonSelectButton: {
    width: _WIDTH * 0.8,
    height: 55,
    borderWidth: 0.7,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  selectText: {
    width: 60,
    fontSize: 14,
    marginLeft: 10
  },
  selectImg: {
    width: 40,
    height: 40
  }
});