import React from "react";
import { View, StyleSheet, Text } from "react-native";
import LogoView from "../../../../Components/Request/LogoView"
import RequestText from "../../../../Components/Request/RequestText"
import { _WIDTH, nonActive, buttonColor } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ state, setState }) => {
  return (
    <View style={styles.container}>
      <LogoView />
      <RequestText 
        text1="기존간판이 존재"
        text2=" 하나요?"
      />
      <View style={styles.content}>
        <TouchableOpacity
          style={[
            styles.picker,
            state.oldBoard && 
            { borderWidth: 1, borderColor: buttonColor }
          ]}
          onPress={()=>setState({
            ...state,
            oldBoard: true
          })}
        >
          <Text 
            style={[
              styles.text, state.oldBoard && { color: buttonColor }
            ]}
          >
            예
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.picker,
            !state.oldBoard && 
            { borderWidth: 1, borderColor: buttonColor }
          ]}
          onPress={()=>setState({
            ...state,
            oldBoard: false
          })}
        >
          <Text 
            style={[
              styles.text, !state.oldBoard && { color: buttonColor }
            ]}
          >
            아니요
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 3,
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: "space-around",
    alignItems: "flex-start",
    flexDirection: "row"
  },
  picker: {
    width: _WIDTH*0.38,
    height: _WIDTH*0.17,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: nonActive,
    borderWidth: 0.5
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: nonActive
  }
});