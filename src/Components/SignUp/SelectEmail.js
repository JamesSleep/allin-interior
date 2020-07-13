import React from "react";
import styled from "styled-components/native";
import { _WIDTH, _HEIGHT } from "../../../theme";
import { Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SelectEmail = ({ visible, setVisible }) => {
  return (
    <Container>
      <Modal
        visible={visible}
      >
        <Text>보이루~</Text>
        <TouchableOpacity onPress={setVisible(!visible)}>
          <Text>종료</Text>
        </TouchableOpacity>
      </Modal>
    </Container>
  )
}

const Container = styled.View`
  width: ${_WIDTH}px;
  height: ${_HEIGHT}px;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

export default SelectEmail;