import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { backgroundColor, buttonColor, _WIDTH } from "../../../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import StoryCard from "./StoryCard";

const fakeDB = [
  {
    name: "James",
    like: 8,
    content: "Hi, I`m James"
  },
  {
    name: "Smith",
    like: 8,
    content: "Hi, I`m Smith"
  },
  {
    name: "David",
    like: 8,
    content: "Hi, I`m David"
  },
]

export default function StoryMain({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>스토리</Text>
        <View style={{ position: "absolute", right: _WIDTH/18 }}>
          <TouchableOpacity 
            style={styles.writeButton}
            onPress={()=>navigation.navigate("WriteStory")}
          >
            <Text style={styles.buttonText}>작성</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <StoryCard />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  }, 
  writeButton: {
    justifyContent: "center",
    alignItems: "center"
  },  
  buttonText: {
    fontSize: 15,
    fontWeight: "400",
    color: buttonColor
  },
});