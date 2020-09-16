import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor } from "../../../../common/theme";

const RESIDENTIAL = [
  "아파트", "빌라", "주택", "원룸"
];

const COMMERCIAL = [
  "사무실", "상가/매장", "카페/식당", "학원/교육", "숙박/병원", "기타"
];

const EXCEPTED = [
  "미정", "1개월 이내", "2개월 이내", "2개월 이후"
];

const MANAGED = [
  "운영중", "운영 예정(계약완료)", "운영 예정(계약전)"
];

export default ({ option, state=String, setState=Function }) => {
  const optionHandler = () => {
    switch (option) {
      case "Excepted":
        return { list: EXCEPTED, property: "excepted" }
      case "Managed":
        return { list: MANAGED, property: "managed"}
      case true:
        return { list: RESIDENTIAL, property: "category"}
      case false:
        return { list: COMMERCIAL, property: "category"}
    }
  }
  const { list, property } = optionHandler();

  const search = (array=Function, value=String) => {
    for(let i=0; i<array.length; i++) 
      if(value === array[i]) 
        return i;
    return -1;
  }
  return (
    <View style={styles.container}>
      { list.map((value, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.category,
            index === search(list, state) ?
            styles.select : styles.nonSelect
          ]}
          onPress={()=>setState(property, value)}
        >
          <Text 
            style={[
              styles.text,
              index === search(list, state) ?
              styles.selectText : styles.nonSelectText
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  category: {
    height: 30,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 15,
  },
  select: {
    borderColor: buttonColor,
    borderWidth: 1,
  },
  nonSelect: {
    borderColor: "gray",
    borderWidth: 0.5,
  },
  text: {
    fontSize: 13,
  },
  selectText: {
    color: buttonColor
  },
  nonSelectText: {
    color: "black"
  }
});