import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"; // heart heart-o
import FontAwesome from "react-native-vector-icons/FontAwesome"; //comment
import { _WIDTH } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  const [heart, setHeart] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.object}>
        <TouchableOpacity onPress={()=>setHeart(!heart)}>
          <FontAwesome 
            name={ heart ? "heart" : "heart-o" }
            size={_WIDTH/25}
            color={ heart ? "#e74c3c" : "rgba(0, 0, 0, 0.5)" }
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
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});
