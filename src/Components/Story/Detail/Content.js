import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { _WIDTH } from "../../../common/theme";

export default ({ heart, comments, content, hashTag }) => {
  const [onHeart, setOnHeart] = useState(false);
  return (
    <View style={styles.container}>
      {/* heart and comment */}
      <View style={styles.countColumn}>
        <View style={styles.object}>
          <TouchableOpacity onPress={()=>setOnHeart(!onHeart)}>
            <FontAwesome 
              name={ onHeart ? "heart" : "heart-o" }
              size={_WIDTH/25}
              color={ onHeart ? "#e74c3c" : "rgba(0, 0, 0, 0.5)" }
            />
          </TouchableOpacity>
          <Text style={styles.count}>24</Text>
        </View>
        <View style={styles.object}>
          <TouchableOpacity>
            <FontAwesome
              name="comment"
              size={_WIDTH/23}
              color="#95a5a6"
            />
          </TouchableOpacity>
          <Text style={styles.count}>2</Text>
        </View>
      </View>
      {/* heart and comment */}
      {/* content */}
      <View style={styles.contentView}>
        <Text style={styles.contentText}>{content}</Text>
        <TextInput 
          multiline
          placeholder="문구 입력..."
          placeholderTextColor="#ecf0f1"
          style={styles.input}
        />
      </View>
      {/* content */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
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
    paddingHorizontal: _WIDTH/15,
  },
  contentText: {
    fontSize: _WIDTH/27,
    fontWeight: "500"
  },

  //textinput
  input: {
    backgroundColor: "#bdc3c7"
  }
});