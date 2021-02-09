import React, { useState } from "react";
import styled from "styled-components/native";
import Title from "../Title";
import AdressSearch from "../../../AdressSearch";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";
import { buttonColor, _WIDTH } from "../../../../common/theme";

const Container = styled.View`
  margin-top: 20px;
`;

const Address1 = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const Address2 = styled.View`
 
`;

const Button = styled.View`
  width: ${_WIDTH * 0.24}px;
  height: ${_WIDTH * 0.1}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${buttonColor};
`;

const Text = styled.Text`
  font-size: ${_WIDTH / 26}px;
  color: white;
`;

const Input1 = styled.TextInput`
  width: 70%;
  height: ${_WIDTH * 0.1}px;
  padding-left: 10px;
  border-width: 0.65px;
  border-color: gray;
  border-radius: 5px;
  font-size: ${_WIDTH / 29}px;
`;

const Input2 = styled.TextInput`
  width: ${_WIDTH * 0.9}px;
  height: ${_WIDTH * 0.1}px;
  padding-left: 10px;
  border-width: 0.65px;
  border-color: gray;
  border-radius: 5px;
  font-size: ${_WIDTH / 29}px;
`;

export default ({ info, setInfo }) => {
  const [visible, setVisible] = useState(false); 

  return (
  <Container>
    <Title>공사지 주소</Title>
    <Address1>
      <Input1 
        placeholder="주소를 검색해주세요"
        placeholderTextColor="gray"
        editable={false}
        value={info.address1}
      />
      <TouchableOpacity onPress={()=>setVisible(true)}>
        <Button>
          <Text>주소 검색</Text>
        </Button>
      </TouchableOpacity>
      <Modal
        visible={visible}
      >
        <AdressSearch 
          setVisible={setVisible}
          info={info}
          setInfo={setInfo}
        />
      </Modal>
    </Address1>
    <Address2>
      <Input2 
        placeholder="상세주소 입력"
        placeholderTextColor="gray"
        onChangeText={text=>setInfo({...info, address2: text})}
      />
    </Address2>
  </Container>
)}