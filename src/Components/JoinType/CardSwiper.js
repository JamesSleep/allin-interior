import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { _HEIGHT, _WIDTH } from "../../common/theme";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: ${_HEIGHT * 0.8}px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

const ImageView = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Discover = styled.View`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 80px;
  border-radius: 3px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 3px;
`;

const Title = styled.Text`
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Button = styled.View`
  width: 250px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 15px;
`;

export default ({ navigation }) => (
  <Container>
    <Swiper 
      style={{ justifyContent: "center", alignItems: "center" }}
      dot={
        <View
          style={{
            backgroundColor: 'rgba(255,255,255,.5)',
            width: 5,
            height: 5,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#FFF',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }}
        />
      }
    >
      <ImageView>
        <Discover>
          <Title>일반회원</Title>
          <TouchableOpacity
            onPress={() => navigation.navigate("Agreement", { option: "general" })} 
          >
            <Button>
              <ButtonText>가입하기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Discover>
        <Image source={require("../../Image/member_join.jpg")} />
      </ImageView>
      <ImageView>
        <Discover>
          <Title>업체회원</Title>
          <TouchableOpacity
            onPress={() => navigation.navigate("Agreement", { option: "company" })} 
          >
            <Button>
              <ButtonText>가입하기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Discover>
        <Image source={require("../../Image/company_join.jpg")} />
      </ImageView>
      <ImageView>
        <Discover>
          <Title>쇼핑몰업체</Title>
          <TouchableOpacity
            onPress={() => navigation.navigate("Agreement", { option: "shopCompany" })} 
          >
            <Button>
              <ButtonText>가입하기</ButtonText>
            </Button>
          </TouchableOpacity>
        </Discover>
        <Image source={require("../../Image/shop_join.jpg")} />
      </ImageView>
    </Swiper>
  </Container>
)