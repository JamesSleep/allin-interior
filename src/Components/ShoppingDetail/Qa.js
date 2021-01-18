import React from "react";
import styled from "styled-components/native";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View``;

const WriteButton = styled.View`
  position: absolute;
  top: 5px;
  right: 20px;
`;

const WriteText = styled.Text`
  color: ${buttonColor};
  font-size: ${_WIDTH / 30}px;
`;

const Box = styled.View`
  padding: 10px 20px;
`;

const Status = styled.View`
  width: ${_WIDTH * 0.2}px;
  height: ${_WIDTH * 0.065}px;
  background-color: ${buttonColor};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const StatusText = styled.Text`
  font-size: ${_WIDTH / 32}px;
  color: white;
`;

const QuestionView = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const QuestionIcon = styled.Text`
  color: #e67e22;
  font-size: ${_WIDTH / 28}px;
  font-weight: bold;
  margin-right: 5px;
`;

const QuestionText = styled.Text`
  font-size: ${_WIDTH / 30}px;
  width: ${_WIDTH * 0.3}px;
`;

const QuestionDate = styled.Text`
  position: absolute;
  right: 0px;
  color: gray;
  font-size: ${_WIDTH / 30}px;
`;

const AnswerView = styled.View`
  min-height: ${_WIDTH * 0.25}px;
  background-color: #dfe6e9;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
  padding: 10px 20px;
`;

const AnswerIcon = styled.Text`
  font-size: ${_WIDTH / 28}px;
  font-weight: bold;
  margin-right: 5px;
`;

const AnswerText = styled.Text`
  font-size: ${_WIDTH / 30}px;
  width: ${_WIDTH * 0.3}px;
`;

const AnswerDate = styled.Text`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: gray;
  font-size: ${_WIDTH / 30}px;
`;

export default () => (
  <Container>
    <WriteButton>
      <WriteText>상품문의작성</WriteText>
    </WriteButton>
    <Box>
      <Status>
        <StatusText>답변 대기</StatusText>
      </Status>
      <QuestionView>
        <QuestionIcon>Q</QuestionIcon>
        <QuestionText>언제쯤 배송되나요</QuestionText>
        <QuestionDate>아이디** / 2021.01.08</QuestionDate>
      </QuestionView>
      <AnswerView>
        <AnswerIcon>A</AnswerIcon>
        <AnswerText>빨리보내겟습니다</AnswerText>
        <AnswerDate>2020.01.02</AnswerDate>
      </AnswerView>
    </Box>
  </Container>
)