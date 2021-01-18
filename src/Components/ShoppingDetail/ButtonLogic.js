import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View`
  height: ${_WIDTH * 0.15}px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.85}px;
  height: ${_WIDTH * 0.1}px;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: white;
`;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container visible={visible}>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Button>
          <Text>구매하기</Text>
        </Button>
      </TouchableOpacity>

    </Container>
  )
}