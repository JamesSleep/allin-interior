import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { backgroundColor, buttonColor, _WIDTH, nonActive } from "../../common/theme";

export default ({ setVisible, cities, selected, setSelected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ScrollView style={styles.scroll}>
          { cities.map((city, index) => (
            <TouchableOpacity
              key={index}
              style={
                selected === index ?
                styles.selectView:
                styles.textContainer
              }
              onPress={()=>setSelected(index)}
            >
              <Text 
                style={
                  selected === index?
                  styles.selectText :
                  styles.text
                }
              >
                  {city.name}
              </Text>
            </TouchableOpacity>
          )) }
        </ScrollView>
        <View style={styles.buttonView}>
          <TouchableOpacity 
            style={styles.selectButton}
            onPress={()=>setVisible(false)}
          >
            <Text>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    width: "70%",
    height: _WIDTH*0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  scroll: {
    width: "100%",
    height: _WIDTH*0.5
  },
  buttonView: {
    width: "100%",
    height: _WIDTH*0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  selectView: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
  },
  selectText: {
    fontSize: 16,
    color: "white"
  },  
  text: {
    fontSize: 16,
  },
  selectButton: {
    width: "80%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: nonActive,
    borderRadius: 10,
  }
});