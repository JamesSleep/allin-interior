import React from "react";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  padding: 20px 20px;
`;

const Title = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

const TransferView = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const TransferTitle = styled.Text`
  width: ${_WIDTH * 0.32}px;
  font-size: ${_WIDTH / 33}px;
`;

const TransferContent = styled.Text`
  font-size: ${_WIDTH / 33}px;
`;

const ChangeView = styled.View``;

const ChangeTitle = styled.Text`
  width: ${_WIDTH * 0.17}px;
  font-size: ${_WIDTH / 33}px;
`;

const ChangeContent = styled.Text`
  font-size: ${_WIDTH / 33}px;
`;

const Content = styled.Text`
  font-size: ${_WIDTH / 33}px;
  margin-bottom: 5px;
`;

export default () => (
  <Container>
    <Title>배송/교환 정보</Title>
    <TransferView>
      <Title>배송</Title>
      <Row>
        <TransferTitle>배송</TransferTitle>
        <TransferContent>일반택배</TransferContent>
      </Row>
      <Row>
        <TransferTitle>배송비</TransferTitle>
        <TransferContent>12,000원 착불</TransferContent>
      </Row>
      <Row>
        <TransferTitle>도서산간 추가 배송비</TransferTitle>
        <TransferContent>12,000원</TransferContent>
      </Row>
      <Row>
        <TransferTitle>배송불가 지역</TransferTitle>
        <TransferContent>배송불가 지역이 없습니다.</TransferContent>
      </Row>
      <Content>비례 배송비 주문 상품 개수에 비례하여 배송비 부과</Content>
    </TransferView>
    <ChangeView>
      <Title>교환/환불</Title>
      <Row>
        <ChangeTitle>반품배송비</ChangeTitle>
        <ChangeContent>12,000원 (최초 배송비가 무료인 경우 24,000원 부과)</ChangeContent>
      </Row>
      <Row>
        <ChangeTitle>교환배송비</ChangeTitle>
        <ChangeContent>24,000원</ChangeContent>
      </Row>
      <Row>
        <ChangeTitle>보내실 곳</ChangeTitle>
        <ChangeContent>(45012) 울산 울주군 용연길 289 에이비퍼니쳐</ChangeContent>
      </Row>
      <Content></Content>
      <Content>반품/교환 불가능 사유</Content>
      <Content>아래와 같은 경우 반품/교환이 불가능합니다.</Content>
    </ChangeView>
  </Container>
)