import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { backgroundColor, buttonColor, _WIDTH } from "../../../../common/theme";
import Description from "../../../../Components/CompanyInfo/Description";
import FieldIcon from "../../../../Components/CompanyInfo/FieldIcon";
import Header from "../../../../Components/CompanyInfo/Header";
import ImageView from "../../../../Components/CompanyInfo/ImageView";
import Info from "../../../../Components/CompanyInfo/Info";

export default ({ title, background, navigation, ceoName, year, city, description }) => (
  <View style={styles.container}>
    <Header
      title={title}
      navigation={navigation}
    />
    <ScrollView>
      <ImageView imageUri={background} />
      <Info
        ceoName={ceoName}
        year={year}
        city={city}
      />
      <FieldIcon />
      <Description description={description} />
    </ScrollView>
    <View style={styles.buttonColumn}>
      <TouchableOpacity>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}>견적신청하기</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor
  },
  buttonColumn: {
    width: "100%",
    height: _WIDTH * 0.13,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.85,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonView: {
    width: _WIDTH * 0.8,
    height: _WIDTH * 0.09,
    backgroundColor: buttonColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: _WIDTH / 27,
    fontWeight: "400"
  }
});