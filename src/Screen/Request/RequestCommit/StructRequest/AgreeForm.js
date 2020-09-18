import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import { _WIDTH } from "../../../../common/theme";

const agreeList = [
  "(필수) 개인정보 수집 및 이용에 동의",
  "(필수) 개인정보 제 3자 제공에 동의",
  "(선택) 인테리어 정보 및 마케팅 수신에 동의"
];

export default ({ setState }) => {
  const [checkList, setCheckList] = useState([
    false, false, false,
  ]);
  const booleanHandler = index => {
    const list = checkList.map((check, index2) => 
      index2 === index ? !check : check);
    setCheckList(list);
    if(list[0] && list[1]) 
      setState("agree", true);
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Ionic 
          name={
            checkList[0] * checkList[1] * checkList[2] ?
            "checkbox-outline" : "square-outline"
          }
          size={_WIDTH/18}
          onPress={()=>{
            if(checkList[0] * checkList[1] * checkList[2]) {
              setCheckList([false, false, false]);
            } else {
              setCheckList([true, true, true]);
            }
          }}
        />
        <Text style={styles.allAgree}>전체동의</Text>
      </View>
      <View style={styles.line} />
      { agreeList.map((text, index) => (
        <View
          key={index} 
          style={styles.rowContainer}
        >
          <Ionic 
            name={
              checkList[index] ? 
              "checkbox-outline" : "square-outline"
            }
            size={_WIDTH/18}
            onPress={()=>booleanHandler(index)}
          />
          <Text style={styles.agreeText} >{text}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  allAgree: {
    fontSize: 15,
    fontWeight: "400",
    marginLeft: 10,
  },
  agreeText: {
    fontSize: 14,
    fontWeight: "300",
    marginLeft: 10,
  },
  line: {
    width: "100%",
    height: 1,
    borderWidth: 0.5,
    borderColor: "gray",
    marginVertical: 10,
  }
})