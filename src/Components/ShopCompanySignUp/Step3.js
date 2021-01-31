import React from "react";
import styled from "styled-components/native";
import Title from "./Title";
import { Platform } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  padding: 0px 25px;
`;

const Area = styled.View`
  margin-bottom: 40px;
`;

const TextInput = styled.TextInput`
  margin-top: 10px;
  padding-bottom: 5px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
  font-size: 15px;
  height: ${Platform.OS === "ios" ? 35: 40}px;
`;

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export default ({ info, setInfo, imagePicker }) => (
  <Container>
    <Area>
      <Title text="업체소개" />
      <TextInput 
        value={info.discription}
        onChangeText={text => setInfo({
          ...info,
          discription: text
        })}
      />
    </Area>
    <Area>
      <Title text="프로필 사진" />
      <TouchableOpacity
        style={{ marginTop: 15 }}
        onPress={() => imagePicker()}
      >
        { info.imagePath !== "" ?
          <Image source={{ uri: info.imagePath }} /> :
          <Feather name="camera" size={120} color="#bdc3c7" />
        }
      </TouchableOpacity>
    </Area>
  </Container>
)