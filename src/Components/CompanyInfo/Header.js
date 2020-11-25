import React from "react";
import { StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { backgroundColor, _WIDTH } from "../../common/theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";

const Text = styled.Text`
  font-size: ${_WIDTH / 22}px;
`;

export default ({ title, navigation }) => (
  <View style={styles.container}>
    <View style={styles.leftArrow}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={_WIDTH / 20}
        />
      </TouchableOpacity>
    </View>
    <Text>
      {title}
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 8,
  },
  leftArrow: {
    position: "absolute",
    left: _WIDTH / 20,
  },
})

