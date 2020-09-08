import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { _WIDTH, buttonColor } from "../../common/theme";

const radioOption = [
  "인테리어/건설 업체",
  "쇼핑몰 업체",
  "청소 업체",
  "간판 업체"
];

export default ({ 
  name, 
  selected, 
  setSelected, 
  selectArr,  
  signUpData,
  setSignUpData
}) => {
  useEffect(()=>{
    if(signUpData.type !== "") {
      for(let i=0; i<radioOption.length; i++) {
        if(radioOption[i] === signUpData.type) {
          setSelected(selectArr.map((value, index) => {
            if(index === i) {
              return value = true;
            } else return value = false;
          }))
        }
      }
    }
  }, []);
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={()=>setSelected(
        selectArr.map((value, index) => {
          if(selected === index) {
            setSignUpData({
              ...signUpData,
              type: radioOption[index]
            })
            return value = true;
          } else return value = false;
        })
      )}
    >
      <View style={styles.radioBorder}>
        <View style={
          selectArr[selected] ? 
          styles.radioCircle :
          styles.nonRadioCircle
        } />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBorder: {
    width: _WIDTH/22,
    height: _WIDTH/22,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  radioCircle: {
    width: _WIDTH/45,
    height: _WIDTH/45,
    borderRadius: 50,
    backgroundColor: buttonColor,
    opacity: 0.6
  },
  nonRadioCircle: {
    width: _WIDTH/45,
    height: _WIDTH/45,
    borderRadius: 50,
    backgroundColor: "white",
    opacity: 0.6
  },
  text: {
    fontSize: 13
  }
})