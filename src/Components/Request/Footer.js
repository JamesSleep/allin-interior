import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { _WIDTH, buttonColor } from "../../common/theme";

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.prevButtonContainer}>
        <TouchableOpacity
          style={styles.prevButton}
          onPress={()=>navigation.goBack()}
        >
          <Icon 
            name="angle-left" 
            size={_WIDTH/15}
            color={buttonColor}
          />
          <Text style={styles.prevText}>이전</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
        >
          <Text style={styles.nextText}>다음단계로</Text>
          <Icon 
            name="angle-right" 
            size={_WIDTH/15}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1.1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "80%",
    height: "80%",
  },
  prevButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
  },
  prevButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  prevText: {
    marginLeft: 5,
    fontSize: 16,
    color: buttonColor
  },
  nextButtonContainer: {
    width: _WIDTH*0.28,
    height: _WIDTH*0.12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: buttonColor,
    borderRadius: 5,
    position: "absolute",
    right: 10,
  },
  nextButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    marginRight: 5,
    fontSize: _WIDTH/27,
    color: "white"
  },
});