import React from "react";
import styled from "styled-components/native";
import { buttonColor } from "../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modal } from "react-native";
import AdressSearch from "../AdressSearch";

const Container = styled.View`
  border-color: #eeeeee;
  border-bottom-width: 8px;
`;

const TitleView = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  border-color: #dddddd;
  border-bottom-width: 0.7px;
`;

const TitleText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const InfoView = styled.View`
  padding: 10px 20px;
`;

const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

const InfoTitle = styled.Text`
  width: 70px;
`;

const InfoContent = styled.TextInput`
  width: ${props => props.length}px;
  height: 35px;
  border-width: 1px;
  border-color: #dddddd;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 13px;
`;

const Line = styled.Text`
  color: #dddddd;
  font-size: 16px;
  font-weight: bold;
`;

const AddressButton = styled.View`
  width: 80px;
  height: 35px;
  margin-left: 10px;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const AddressButtonText = styled.Text`
  font-size: 13px;
  color: white;
`;

export default ({ receiverInfo, setReceiverInfo, visible, setVisible }) => (
  <Container>
    <TitleView>
      <TitleText>배송지 정보</TitleText>
    </TitleView>
    <InfoView>
      <InfoRow>
        <InfoTitle>수령인</InfoTitle>
        <InfoContent 
          length={170}
          value={receiverInfo.name}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            name: text
          })}
        />
      </InfoRow>
      <InfoRow>
        <InfoTitle>휴대전화</InfoTitle>
        <InfoContent 
          length={70}
          value={receiverInfo.phone1}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            phone1: text
          })}
        />
        <Line> - </Line>
        <InfoContent 
          length={70}
          value={receiverInfo.phone2}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            phone2: text
          })}
        />
        <Line> - </Line>
        <InfoContent 
          length={70}
          value={receiverInfo.phone3}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            phone3: text
          })}
        />
      </InfoRow>
      <InfoRow>
        <InfoTitle>주소</InfoTitle>
        <InfoContent 
          length={100}
          value={receiverInfo.zipcode}
          editable={false}
        />
        <TouchableOpacity onPress={()=>setVisible(true)}>
          <AddressButton>
            <AddressButtonText>주소 검색</AddressButtonText>
          </AddressButton>
        </TouchableOpacity>
        <Modal visible={visible}>
          <AdressSearch 
            setVisible={setVisible}
            info={receiverInfo}
            setInfo={setReceiverInfo}
          />
        </Modal>
      </InfoRow>
      <InfoRow>
        <InfoTitle></InfoTitle>
        <InfoContent 
          length={250}
          value={receiverInfo.address1}
          editable={false}
        />
      </InfoRow>
      <InfoRow>
        <InfoTitle>상세주소</InfoTitle>
        <InfoContent 
          length={250}
          value={receiverInfo.address2}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            address2: text
          })}
        />
      </InfoRow>
      <InfoRow>
        <InfoTitle>배송메모</InfoTitle>
        <InfoContent 
          length={250}
          value={receiverInfo.memo}
          onChangeText={text=>setReceiverInfo({
            ...receiverInfo,
            memo: text
          })}
        />
      </InfoRow>
    </InfoView>
  </Container>
)