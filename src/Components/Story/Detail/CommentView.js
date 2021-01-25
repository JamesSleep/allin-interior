import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { _WIDTH } from "../../../common/theme";

const Container = styled.View`
  width: 100%;
  padding: 0px 20px 20px 20px;
  margin-top: 14px;
`;

const CommentList = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 2px 5px;
`;

const Nickname = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
`;

const Comment = styled.Text`
  font-size: 13px;
  font-weight: 400;
`;

export default ({ list, comment, setComment, postData }) => (
  <Container>
    { list?.map((ment, index) => (
      <CommentList key={index}>
        <Nickname>{ment.nick_name}</Nickname>
        <Comment>{ment.comment}</Comment>
      </CommentList>
    ))}
  </Container>
)