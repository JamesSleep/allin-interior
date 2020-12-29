import React from "react";
import styled from "styled-components/native";
import PostCode from "react-native-daum-postcode";
import { _WIDTH, _HEIGHT, buttonColor } from "../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native";

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const ButtonView = styled.View`
  width: 100%;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: 100%;
  height: 80%;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 26}px;
  color: white;
`;

export default ({ setVisible, info, setInfo }) => {
  return (
    <SafeAreaView>
      <Container>
        <PostCode 
          style={{ width: "100%", height: "100%" }}
          jsOptions={{ animation: true }}
          onSelected={(data) => {
            setInfo({
              ...info,
              zipcode: data.zonecode,
              address1: data.address,
            });
            setVisible(false);
          }}
        />
        <ButtonView>
          <TouchableOpacity
            style={{
              width: _WIDTH * 0.8,
              height: 50
            }}
            onPress={()=>setVisible(false)}
          >
            <Button>
              <Text>닫기</Text>
            </Button>
          </TouchableOpacity>
        </ButtonView>
      </Container>
    </SafeAreaView>
  )
}