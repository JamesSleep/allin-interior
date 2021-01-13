import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../../common/theme";
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

const ButtonView = styled.View``;

const Button = styled.View``;

const Text = styled.Text``;

export default ({ navigation, info }) => (
  <Container>
    <Head navigation={navigation} />
    <ScrollView>
      <ImageView imageUrl={info.image} />
      <TitleView info={info} />
      <ProductInfo info={info} />
      <DetailTab />
    </ScrollView>
    <Button>

    </Button>
  </Container>
)