import React from "react";
import styled from "styled-components/native";

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
  padding: 15px 20px;
`;

const InfoRow = styled.View`
  height: 35px;
  flex-direction: row;
  align-items: center;
  margin: 5px 0px;
`;

const InfoTitle = styled.Text`
  width: 70px;
  margin-right: 40px;
  font-size: 14px;
  font-weight: bold;
`;

const InfoContent = styled.Text`
  font-size: 13px;
  font-weight: 500;
`;

export default ({ userInfo }) => (
  <Container>
    <TitleView>
      <TitleText>주문자 정보</TitleText>
    </TitleView>
    <InfoView>
      <InfoRow>
        <InfoTitle>이름</InfoTitle>
        <InfoContent>{userInfo.user_name}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>이메일</InfoTitle>
        <InfoContent>{userInfo.email}</InfoContent>
      </InfoRow>
      <InfoRow>
        <InfoTitle>휴대전화</InfoTitle>
        <InfoContent>{phoneArange(userInfo.phone_number)}</InfoContent>
      </InfoRow>
    </InfoView>
  </Container>
);

const phoneArange = (text ="") => {
  const result = text.slice(0,3) + " - " + text.slice(3,7) + " - " + text.slice(7,11);
  return result;
}