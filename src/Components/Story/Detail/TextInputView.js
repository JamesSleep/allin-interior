import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { _WIDTH } from "../../../common/theme";

const Container = styled.View`
  width: 100%;
  padding: 0px 20px 10px 20px;
`;

const View = styled.View`
  flex-direction: row;
  background-color: #ecf0f1;
  padding: ${Platform.OS === "ios" ? 10 : 0}px 15px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
`;

const TextInput = styled.TextInput`
  width: 80%;
  font-size: 15px;
`;

export default ({ setComment, postData }) => (
  <Container>
    <View>
      <TextInput 
        placeholder="내용을 입력해주세요."
        placeholderTextColor="gray"
        onChangeText={text=>setComment(text)}
      />
      <TouchableOpacity onPress={() => postData()}>
        <Ionicons 
          name="paper-plane-sharp"
          size={25}
        />
      </TouchableOpacity>
    </View>
  </Container>
)