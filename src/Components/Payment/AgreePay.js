import React from "react";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import { buttonColor, _WIDTH } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  padding: 25px 30px;
`;

const CheckView = styled.View`
  margin-bottom: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.5px;
  border-bottom-color: gray;
`;

const BoldText = styled.Text`
  margin-left: 10px;
  font-size: ${_WIDTH / 28}px;
  font-weight: bold;
`;

const AgreeView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

const ShowText = styled.Text`
  color: gray;
  font-size: ${_WIDTH / 30}px;
`;

const ButtonView = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.85}px;
  height: ${_WIDTH * 0.1}px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const BtText = styled.Text`
  color: white;
  font-size: ${_WIDTH / 27}px;
`;

export default ({ agree, setAgree, post, navigation }) => (
  <Container>
    <CheckView>
      <TouchableOpacity onPress={() => setAgree(!agree)}>
        <Feather
          name={agree ? "check-square" : "square"}
          size={_WIDTH / 22}
        />
      </TouchableOpacity>
      <BoldText>
        결제 진행 필수사항 동의
      </BoldText>
    </CheckView>
    <AgreeView>
      <Text>개인정보 제 3자 제공 및 결제대행 서비스 표준 이용약관</Text>
      <TouchableOpacity>
        <ShowText>보기</ShowText>
      </TouchableOpacity>
    </AgreeView>
    <ButtonView>
      <TouchableOpacity onPress={() => post()}>
        <Button>
          <BtText>결제하기</BtText>
        </Button>
      </TouchableOpacity>
    </ButtonView>
  </Container>
)