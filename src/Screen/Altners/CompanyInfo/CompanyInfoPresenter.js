import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Header";
import { backgroundColor, _WIDTH, buttonColor } from "../../../common/theme";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageView from "../../../Components/Altners/CompanyInfo/ImageView";
import Info from "../../../Components/Altners/CompanyInfo/Info";
import FieldIcon from "../../../Components/Altners/CompanyInfo/FieldIcon";
import Description from "../../../Components/Altners/CompanyInfo/Description";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH * 0.11}px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
`;

const Text = styled.Text`
  font-size: 15px;
  color: white;
`;

export default ({ navigation, screen, info }) => (
  <Container>
    <Header
      navigation={navigation}
      screen={screen}
    />
    <ScrollView
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <ImageView imageUri={info.landscape} />
      <Info 
        ceoName={info.ceo_name}
        year={info.year}
        city={info.city}
      />
      <FieldIcon />
      <Description description={info.description} />
    </ScrollView>
    <View style={styles.buttonColumn}>
      <TouchableOpacity>
        <Button>
          <Text>견적신청하기</Text>
        </Button>
      </TouchableOpacity>
    </View>
  </Container>
);

const styles = StyleSheet.create({
  buttonColumn: {
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: backgroundColor,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 8,
  },
});