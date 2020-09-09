import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { nonActive, _WIDTH } from "../../../common/theme";
import { imageLoad } from "../../../common/imageLoad";

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
    justifyContent: "flex-end"
  },
  nicknameText: {
    fontSize: 16, 
    fontWeight: "500"
  },
  snsContainer: {
    flex: 1, 
    flexDirection: "row", 
    alignItems: "flex-start", 
    marginTop: 20
  },
  
});

export default ({ joinInfo, memberPrivate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileImgContainer}>
        <Image 
          source={
            joinInfo?.mb_image_path !== null ?
            { uri : imageLoad(joinInfo.mb_image_path)} :
            require("../../../Image/logo.png")
          }
          style={styles.profileImage}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nickContainer}>
          <Text style={styles.nicknameText}>
            {joinInfo.mb_nickname}
          </Text>
        </View>
        <View style={styles.snsContainer}>
          <Text style={{ fontSize: 14, marginRight: 10 }}>
            {`팔로워 ${memberPrivate.follower}`}
          </Text>
          <Text style={{ fontSize: 14, marginRight: 10 }}>
            {`팔로잉 ${memberPrivate.following}`}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Image 
              source={require("../../../Image/crown.png")} 
              style={{ width: _WIDTH/15, height: _WIDTH/24 }} 
              resizeMode="cover" 
            />
            <Text style={{ fontSize: 14, marginLeft: 5 }}>
              {`x ${memberPrivate.crown}`}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}