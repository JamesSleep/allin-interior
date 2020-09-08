import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { buttonColor, nonActive } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const WORK_CATEGORIES = [
  { name : "아파트", active: false },
  { name : "빌라", active: false },
  { name : "주택", active: false },
  { name : "원룸", active: false },
  { name : "사무실", active: false },
  { name : "상가/매장", active: false },
  { name : "카페/식당", active: false },
  { name : "학원/교육", active: false },
  { name : "간판", active: false },
  { name : "기타", active: false },
  { name : "신축공사", active: false },
  { name : "증축공사", active: false },
  { name : "리모델링", active: false },
];

export default ({ signUpData, setSignUpData }) => {
  const [categories, setCategories] = useState(WORK_CATEGORIES);
  useEffect(()=>{
    setCategories(categories.map((category, index) => {
      for(let i=0; i<signUpData.categories?.length; i++) {
        if(signUpData.categories[i] === category.name) {
          return { name: category.name, active: true }
        }
      }
      return { name: category.name, active: false };
    }));
  }, [signUpData.categories])
  const activeHandler = (category, index) => {
    if(category.active) {
      setSignUpData({
        ...signUpData,
        categories : signUpData.categories?.filter((value, index) => (
          value !== category.name
        ))
      });
    } else {
      setSignUpData({
        ...signUpData,
        categories : [
          ...signUpData.categories,
          WORK_CATEGORIES[index].name
        ]
      });
    }
  }
  return (
    <View style={styles.mainContainer}> 
      { categories.map((category, index) => (
        <TouchableOpacity 
          key={index} 
          style={
            category.active ?
            styles.workObject :
            styles.nonActiveObject
          }
          onPress={()=>activeHandler(category, index)}
        >
          <Text 
            style={
              category.active ?
              styles.text : 
              styles.nonActiveText
            }
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 12,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  workObject: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: buttonColor,
    borderRadius: 20,
  },
  nonActiveObject: {
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: nonActive,
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize : 12
  },
  nonActiveText: {
    fontSize: 12,
    color: nonActive
  }  
});

