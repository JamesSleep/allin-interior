import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { backgroundColor, _WIDTH } from "../../common/theme";
import StoryCard from "../../Components/Story/StoryCard";
import Header from "../../Components/Story/Header";

export default ({ navigation, userInfo }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <ScrollView
      contentContainerStyle={{
        paddingVertical: _WIDTH/30,
        paddingHorizontal: _WIDTH/25,
      }}
    >
      <StoryCard 
        userInfo={userInfo}
      />
    </ScrollView>
  </View>
) 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1"
  }
});