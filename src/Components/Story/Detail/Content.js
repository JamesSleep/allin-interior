import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { _WIDTH } from "../../../common/theme";

export default ({ heart, comments, content, hashTag, addHeart, delHeart, mb_index }) => {
  const checkHeart = () => {
    if (heart.length < 1) return false;
    let array = heart.filter(item => item.mb_index === mb_index);
    if (array.length > 0) {
      return true;
    } else return false;
  }
  return (
    <View style={styles.container}>
      {/* heart and comment */}
      <View style={styles.countColumn}>
        <View style={styles.object}>
          <TouchableOpacity onPress={()=>{
            !checkHeart() ? addHeart() : delHeart()
          }}>
            <FontAwesome 
              name={ checkHeart() ? "heart" : "heart-o" }
              size={_WIDTH/25}
              color={ checkHeart() ? "#e74c3c" : "rgba(0, 0, 0, 0.5)" }
            />
          </TouchableOpacity>
          <Text style={styles.count}>{heart.length}</Text>
        </View>
        <View style={styles.object}>
          <TouchableOpacity>
            <FontAwesome
              name="comment"
              size={_WIDTH/23}
              color="#95a5a6"
            />
          </TouchableOpacity>
          <Text style={styles.count}>{comments}</Text>
        </View>
      </View>
      {/* heart and comment */}
      {/* content */}
      <View style={styles.contentView}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
      {/* content */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10
  },
  // heart and comment
  countColumn: {
    width: "100%",
    height: _WIDTH/10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  object: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: _WIDTH/13,
  },
  count: {
    marginLeft: _WIDTH/45,
    fontSize: _WIDTH/38,
    fontWeight: "300"
  },

  //content
  contentView: {
    paddingHorizontal: 25,
  },
  contentText: {
    fontSize: 16,
    fontWeight: "500"
  },

  //textinput
  input: {
    backgroundColor: "#bdc3c7"
  }
});