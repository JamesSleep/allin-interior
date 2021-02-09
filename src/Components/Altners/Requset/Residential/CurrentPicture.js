import React from "react";
import styled from "styled-components/native";
import Title from "../Title";
import Material from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  margin-top: 25px;
`;

const TakePhoto = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: #dddddd;
  border-radius: 10px;
`;

const ImageView = styled.View`
  margin-left: 10px;
`

const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const DeleteButton = styled.View`
  position: absolute;
  right: -5px;
  top: -5px;
`;

export default ({ imagePicker, current=[], setCurrent, imageClean }) => (
  <Container>
    <Title>참고 사진</Title>
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingTop: 10, paddingRight: 10 }}
    >
      <TouchableOpacity onPress={() => imagePicker()}>
        <TakePhoto>
          <Material name="add-a-photo" size={50} color="#fff" />
        </TakePhoto>
      </TouchableOpacity>
      { current.length > 0 && (
        current.map((item, index) => (
          <ImageView key={index}>
            <Image 
              source={{ uri: item.imagePath }}
            />
            <DeleteButton>
              <TouchableOpacity onPress={() => imageClean(item.imagePath)}>
                <AntDesign name="closecircle" size={25} color="#bbb" />
              </TouchableOpacity>
            </DeleteButton>
          </ImageView>
        ))
      )}
    </ScrollView>
  </Container>
)