import React from "react";
import styled from "styled-components/native";
import { _WIDTH, buttonColor } from "../../../common/theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCI from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 165px;
  background-color: white;
  border-radius: 10px;
  border-width: 1px;
  border-color: #e8e8e8;
  margin-bottom: 15px;
`;

const Content = styled.View`
  width: 100%;
  height: 120px;
  justify-content: space-around;
  padding: 0px 15px;
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const Address = styled.Text`
  font-size: 12px;
`;

const State = styled.Text`
  font-size: 14px;
  color: #e67e22;
  font-weight: bold;
`;

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #e8e8e8;
`;

const Detail = styled.View`
  width: ${props=>props.type === "company" ? _WIDTH * 0.8 / 3 : _WIDTH * 0.4}px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #e8e8e8;
`;

const Detail2 = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #e8e8e8;
`;

const DetailText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
`;

const Cancel = styled.View`
  width: ${_WIDTH * 0.4}px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CancelText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
`;

const Accept = styled.View`
  width: ${_WIDTH * 0.8 / 3}px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-right-width: 1px;
  border-right-color: #e8e8e8;
`;

const AcceptText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
`;

const Reject = styled.View`
  width: ${_WIDTH * 0.8 / 3}px;
  height: 45px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RejectText = styled.Text`
  margin-left: 5px;
  font-size: 13px;
`;

export default ({ info, inboxHandler, cancelHandler, type, accept, startInterior, endInterior, navigation, payHandler }) => (
  <Container>
    <Content>
      <Title>
        {`${info.space_style} ${info.square_feet}평`}
      </Title>
      <Address>
        {`${info.address1} ${info.address2}`}
      </Address>
      <State>
        {info.state === "100" && "업체 승인을 기다리는중입니다"}
        {info.state === "200" && "상담을 진행중입니다"}
        {info.state === "300" && "시공 진행중입니다"}
        {info.state === "400" && "결제 대기중입니다"}
        {info.state === "500" && "시공이 완료되었습니다!"}
      </State>
    </Content>
    <ButtonView>
      <TouchableOpacity onPress={() => inboxHandler(info)}>
        { (info.state === "100" || info.state === "200" || info.state === "300") && (
          <Detail type={type}>
            <MaterialCI name="file-document-outline" size={20} />
            <DetailText>견적서보기</DetailText>
          </Detail>
        )}
        { info.state === "400" && (
          <Detail>
            <MaterialCI name="file-document-outline" size={20} />
            <DetailText>견적서보기</DetailText>
          </Detail>
        )}
        { info.state === "500" && (
          <Detail2>
            <MaterialCI name="file-document-outline" size={20} />
            <DetailText>견적서보기</DetailText>
          </Detail2>
        )}
      </TouchableOpacity>
      { type === "company" && info.state === "100" && (
        <>
        <TouchableOpacity onPress={() => accept(info.it_index)}>
          <Accept>
            <MaterialCI name="check-circle-outline" size={20} />
            <AcceptText>수락</AcceptText>
          </Accept>
        </TouchableOpacity>
        <TouchableOpacity>
          <Reject>
            <MaterialCI name="close-circle-outline" size={20} />
            <RejectText>거절</RejectText>
          </Reject>
        </TouchableOpacity>
        </>)}
      { type === "company" && info.state === "200" && (
        <>
        <TouchableOpacity onPress={() => startInterior(info.it_index)}>
          <Accept>
            <MaterialCI name="hammer-wrench" size={20} />
            <AcceptText>시공시작</AcceptText>
          </Accept>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cancelHandler(info.it_index)}>
          <Reject>
            <MaterialCI name="close-circle-outline" size={20} />
            <RejectText>취소</RejectText>
          </Reject>
        </TouchableOpacity>
        </>)}
      { type === "company" && info.state === "300" && (
      <>
        <TouchableOpacity onPress={() => endInterior(info.it_index)}>
          <Accept>
            <MaterialCI name="check-circle-outline" size={20} />
            <AcceptText>시공완료</AcceptText>
          </Accept>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => cancelHandler(info.it_index)}>
          <Reject>
            <MaterialCI name="close-circle-outline" size={20} />
            <RejectText>시공중단</RejectText>
          </Reject>
        </TouchableOpacity>
      </>)}
      { type === "company" && info.state === "400" && (
      <>
        <TouchableOpacity onPress={() => navigation.navigate("InputPrice", { data: info })}>
          <Cancel>
            <MaterialCI name="calculator" size={20} />
            <AcceptText>정산하기</AcceptText>
          </Cancel>
        </TouchableOpacity>
      </>)}
      { (type === "member" || type === "shop") && info.state === "100" && (
        <TouchableOpacity onPress={() => cancelHandler(info.it_index)}>
          <Cancel>
            <MaterialCI name="cancel" size={20} />
            <CancelText>취소</CancelText>
          </Cancel>
        </TouchableOpacity>
      )}
      { (type === "member" || type === "shop") && info.state === "200" && (
        <TouchableOpacity onPress={() => cancelHandler(info.it_index)}>
          <Cancel>
            <MaterialCI name="cancel" size={20} />
            <CancelText>취소</CancelText>
          </Cancel>
        </TouchableOpacity>
      )}
      { (type === "member" || type === "shop") && info.state === "300" && (
        <TouchableOpacity onPress={() => cancelHandler(info.it_index)}>
          <Cancel>
            <MaterialCI name="cancel" size={20} />
            <CancelText>시공중단</CancelText>
          </Cancel>
        </TouchableOpacity>
      )}
      { (type === "member" || type === "shop") && info.state === "400" && (
        <TouchableOpacity onPress={() => payHandler(info)}>
          <Cancel>
            <MaterialCI name="check-circle-outline" size={20} />
            <AcceptText>결제하기</AcceptText>
          </Cancel>
        </TouchableOpacity>
      )}
    </ButtonView>
  </Container>
)