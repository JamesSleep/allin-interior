import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { backgroundColor } from "../../../common/theme";
import ProfileHeader from "../../../Components/MyPage/ProfileHeader";
import UserSocial from "../../../Components/MyPage/UserSocial";
import ProfileMenu from "../../../Components/MyPage/ProfileMenu";

export default ({ navigation, userInfo, logout }) => (
  <View style={styles.container}>
    <ProfileHeader 
      image_path={userInfo.information.profile}
      nick_name={userInfo.information.nick_name}
    />
    <UserSocial 
      follower={userInfo.follower}
      following={userInfo.following}
      write={userInfo.write}
    />
    <ProfileMenu 
      navigation={navigation}
      logout={logout}
    />
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  }
});