import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { buttonColor } from "../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #dddddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

const ComboView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckBox = styled.View`
  width: 25px;
  height: 25px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 5px;
  margin-right: 5px;
  background-color: white;
`;

const Text = styled.Text``;

const DeleteButton = styled.View`
  background-color: white;
  padding: 6px 5px;
`;

const DeleteText = styled.Text`
  font-size: 13px;
`;

export default ({ cartCount, checkCount, allCheck, deleteAllCart }) => (
  <Container>
    <ComboView>
      <TouchableOpacity
        onPress={() => allCheck()}
      >
        <CheckBox>
          { checkCount === cartCount && (
            <Icon name="check" size={24} color={buttonColor} />
          )}
        </CheckBox>
      </TouchableOpacity>
      <Text>{`전체선택(${checkCount}/${cartCount})`}</Text>
    </ComboView>
    <TouchableOpacity 
      onPress={() => deleteAllCart()}
    >
      <DeleteButton>
        <DeleteText>전체삭제</DeleteText>
      </DeleteButton>
    </TouchableOpacity>
  </Container>
)