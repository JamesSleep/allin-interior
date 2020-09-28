import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { _WIDTH } from "../../../common/theme";

const AGREE_LIST = [
  { name: "위치기반 서비스 약관 동의", value: "location" },
  { name: "개인정보 처리방침 동의", value: "individual" },
  { name: "올인 이용 약관 동의", value: "allin" },
];

export default ({ check, setState }) => (
  <View style={styles.container}>
    <View style={styles.rowContainer}>
      <Ionic 
        name={
          check.location && check.individual && check.allin ?
          "checkbox-outline" : "square-outline"
        }
        size={_WIDTH/20}
        onPress={()=>
          check.location && check.individual && check.allin ?
            setState({
              ...check,
              location: false,
              individual: false,
              allin: false
            }) :
            setState({
              ...check,
              location: true,
              individual: true,
              allin: true
            })
        }
      />
      <Text style={styles.mainText}>전체동의</Text>
    </View>
    <View style={styles.line} />
    { AGREE_LIST.map((agree, index) => (
      <View 
        key={index}
        style={styles.rowContainer}
      >
        <Ionic 
          name={
            check[agree.value] ?
            "checkbox-outline" : "square-outline"
          }
          size={_WIDTH/20}
          onPress={()=>setState({
            ...check,
            [agree.value]: !check[agree.value]
          })}
        />
        <Text style={styles.text}>{agree.name}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 8,
    paddingHorizontal: 25,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    width: "100%",
    height: 1,
    marginBottom: 20,
    backgroundColor: "black"
  },
  mainText: {
    marginLeft: 15,
    fontSize: _WIDTH/28,
    fontWeight: "600"
  },
  text: {
    marginLeft: 15,
    fontSize: _WIDTH/28,
    fontWeight: "400"
  }
})