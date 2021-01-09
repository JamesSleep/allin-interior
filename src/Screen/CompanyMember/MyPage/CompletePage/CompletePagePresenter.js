import React from "react";
import styled from "styled-components/native";
import Feather from "react-native-vector-icons/Feather";
import { backgroundColor, buttonColor, _WIDTH } from "../../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  padding: 50px 0px 15px 0px;
  background-color: ${backgroundColor};
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 24}px;
`;

const ColorTitle = styled.Text`
  color: ${buttonColor};
`;

const Content = styled.ScrollView`
  width: 100%;
  margin-top: 30px;
  padding: 20px 50px;
`;

const RowTitle = styled.Text`
  font-size: ${_WIDTH / 27}px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const TextInput = styled.TextInput`
  width: 100%;
  padding: 0px 15px;
  height: ${_WIDTH / 7}px;
  margin-bottom: 30px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 10px;
  font-size: ${_WIDTH / 29}px;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: ${_WIDTH * 0.09}px;
  background-color: ${buttonColor};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const BtText = styled.Text`
  font-size: ${_WIDTH / 27}px;
  color: white;
`;

const BackButton = styled.View`
  position: absolute;
  top: 10px;
  left: 20px;
`;

const BackText = styled.Text`
  font-size: ${_WIDTH / 28}px;
  color: ${buttonColor};
`;

export default ({ navigation, info, setInfo, post }) => (
  <Container>
    <BackButton onTouchEnd={() => navigation.goBack()}>
      <BackText>back</BackText>
    </BackButton>
    <Title>
      <ColorTitle>시공금액</ColorTitle>과
      <ColorTitle> 완공일</ColorTitle>을
      입력해주세요.
    </Title>
    <Content>
      <RowTitle>총 금액</RowTitle>
      <TextInput
        placeholder="예) 24780000"
        onChangeText={text => setInfo({ ...info, payment: text })}
        keyboardType="number-pad"
      />
      <RowTitle>완공일</RowTitle>
      <TextInput
        placeholder="예) 2021-01-01"
        onChangeText={text => setInfo({ ...info, endDate: text })}
        keyboardType="number-pad"
      />
      {/* <RowTitle>영수증 이미지</RowTitle>
      <TouchableOpacity>
        <Feather
          name="camera"
          size={_WIDTH * 0.4}
          color="#bdc3c7"
        />
      </TouchableOpacity> */}
    </Content>
    <TouchableOpacity onPress={() => post()}>
      <Button>
        <BtText>입력 완료</BtText>
      </Button>
    </TouchableOpacity>
  </Container>
)