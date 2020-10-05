import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { imagePathFormat } from "../../utils/imagePathFormat";
import { _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";

export default ({ image_path, nick_name }) => (
  <View style={styles.container}>
    <View style={styles.profile}>
      { image_path ? (
        <Image 
          source={{ uri: imagePathFormat(image_path) }}
          style={styles.image}
        />
      ) : (
        <Image 
          source={require("../../Image/logo.png")}
          style={styles.image}
        />
      )}
    </View>
    <View style={styles.nameContainer}>
      <Text style={styles.name}>{nick_name}</Text>
    </View>
    <AntDesign 
      name="notification"
      size={_WIDTH/16}
      color={"#576574"}
      style={styles.noti}
    />
    <AntDesign 
      name="setting"
      size={_WIDTH/16}
      color={"#576574"}
      style={styles.set}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row"
  },
  profile: {
    width: "40%",
    height: "100%",
    paddingHorizontal: _WIDTH/20,
    justifyContent: "center",
    alignItems: "flex-end"
  },
  image: {
    width: _WIDTH*0.25,
    height:  _WIDTH*0.25,
    borderRadius: 50,
  },
  nameContainer: {
    width: "60%",
    height: "100%",
    justifyContent: "center"
  },
  name: {
    fontSize: _WIDTH/20,
    fontWeight: "600",
    color: "#576574"
  },
  set: {
    position: "absolute",
    right: _WIDTH/22,
    top: _WIDTH/18
  },
  noti: {
    position: "absolute",
    right: _WIDTH/7,
    top: _WIDTH/18
  }
});
