import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { nonActive, _WIDTH, tierColor } from "../../../common/theme";
import { imageLoad } from "../../../common/imageLoad";
import { completeCount } from "../../../Components/Company/completeCount";

const styles = StyleSheet.create({
  container: {
    flex: 2, 
    flexDirection: "row", 
    alignItems: "center"
  },
  profileImgContainer: {
    flex: 2, 
    justifyContent: "center", 
    alignItems: "center"
  },
  profileImage: {
    width: _WIDTH*0.2, 
    height: _WIDTH*0.2, 
    borderRadius: 50, 
    borderWidth: 1, 
    borderColor: nonActive
  },
  infoContainer: {
    flex: 3, 
    justifyContent: "center"
  },
  nickContainer: {
    flex: 1, 
    justifyContent: "center"
  },
  nicknameText: {
    fontSize: 16, 
    fontWeight: "500"
  },
});

export default ({ joinInfo, companyPrivate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImgContainer}>
        <Image 
          source={
            companyPrivate.image_path !== null ?
            { uri : imageLoad(companyPrivate.image_path)} :
            require("../../../Image/logo.png")
          }
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nickContainer}>
          <Text style={styles.nicknameText}>
            {joinInfo.co_name}
          </Text>
          <View style={{
            width: _WIDTH*0.15,
            height: _WIDTH*0.05,
            marginTop: 10,
            backgroundColor: tierColor,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}>
            <Text style={{  fontSize: 14, color: "white" }}>
              {completeCount(companyPrivate.request)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}