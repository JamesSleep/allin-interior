import React from "react";
import styled from "styled-components/native";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor, _WIDTH } from "../../common/theme";


const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Input = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH * 0.12}px;
  border-width: 1px;
  border-color: ${buttonColor};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  margin-bottom: 12px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  font-size: 15px;
  padding-left: 5px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH * 0.12}px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: white;
`;

export default ({ value, setValue, handler }) => (
  <Container>
    <Input>
      <MaterialCI name="cellphone-iphone" size={23} />
      <TextInput 
        editable={value.code === "" ? true : false}
        keyboardType="phone-pad"
        onChangeText={text=>setValue({...value, phone: text})}
      />
    </Input>
    { value.code !== "" && (
      <Input>
        <MaterialCI name="message-processing-outline" size={23} />
        <TextInput 
          keyboardType="phone-pad"
          onChangeText={text=>setValue({...value, account: text})}
        />
      </Input>
    )}
    <TouchableOpacity onPress={() => handler()}>
      <Button>
        <ButtonText>
          { value.code === "" ? "인증번호 전송" : "인증하기" }
        </ButtonText>
      </Button>
    </TouchableOpacity>
  </Container>
)