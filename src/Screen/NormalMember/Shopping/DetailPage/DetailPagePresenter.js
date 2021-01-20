import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { backgroundColor, buttonColor, _WIDTH } from "../../../../common/theme";
import ButtonLogic from "../../../../Components/ShoppingDetail/ButtonLogic";
import DetailTab from "../../../../Components/ShoppingDetail/DetailTab";
import Head from "../../../../Components/ShoppingDetail/Head";
import ImageView from "../../../../Components/ShoppingDetail/ImageView";
import ProductInfo from "../../../../Components/ShoppingDetail/ProductInfo";
import TitleView from "../../../../Components/ShoppingDetail/TitleView";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const ScrollView = styled.ScrollView``;

export default ({ navigation, info }) => (
  <Container>
    <Head navigation={navigation} />
    <ScrollView>
      <ImageView imageUrl={info.image} />
      <TitleView info={info} />
      <ProductInfo info={info} />
      <DetailTab />
    </ScrollView>
    <ButtonLogic
      navigation={navigation}
      info={info}
    />
  </Container>
)