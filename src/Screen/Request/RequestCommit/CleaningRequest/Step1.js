import React from "react";
import { View, StyleSheet } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import InputAddress from "../StructRequest/InputAddress";

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="고객님의 주소"
        text2="를 입력해주세요"
      />
      <View style={styles.content}>
        <InputAddress 
          state={state}
          setState={setState}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 4,
    paddingHorizontal: 25,
    justifyContent: "center",
  }
});