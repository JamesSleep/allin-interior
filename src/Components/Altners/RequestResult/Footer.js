import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../../common/theme";

const Container = styled.View`
  flex: 2;
  justify-content: center;
`;

const Button = styled.View`
  height: ${_WIDTH / 9}px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: white;
`;

export default ({ navigation, option }) => (
  <Container>
    <TouchableOpacity
      onPress={() => {
        option === "state" ?
          navigation.goBack() :
          navigation.reset({
            index: 0,
            routes: [{ name: '견적요청함' }],
          });
      }}
    >
      <Button>
        <Text>확인</Text>
      </Button>
    </TouchableOpacity>
  </Container>
) 