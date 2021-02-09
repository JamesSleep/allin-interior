import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Requset/Header";
import { backgroundColor, _WIDTH, buttonColor } from "../../../common/theme";
import { ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import SpaceSelect from "../../../Components/Altners/Requset/Residential/SpaceSelect";
import AddressSearch from "../../../Components/Altners/Requset/Residential/AddressSearch";
import SelectDate from "../../../Components/Altners/Requset/Residential/SelectDate";
import PredictCost from "../../../Components/Altners/Requset/Residential/PredictCost";
import AreaInput from "../../../Components/Altners/Requset/Residential/AreaInput";
import ConstructionSelect from "../../../Components/Altners/Requset/Residential/ConstructionSelect";
import SpaceCount from "../../../Components/Altners/Requset/Residential/SpaceCount";
import CurrentPicture from "../../../Components/Altners/Requset/Residential/CurrentPicture";
import MemoInput from "../../../Components/Altners/Requset/Residential/MemoInput";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const ButtonView = styled.View`
  width: 100%;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  width: ${_WIDTH * 0.8}px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 14px;
`;

export default ({ navigation, value, setValue, imagePicker, imageClean, current, setCurrent, regist }) => (
  <KeyboardAvoidingView
    enabled
    keyboardVerticalOffset={20}
    behavior={Platform.OS === "ios" ? "padding" : null}
    style={{ flex: 1 }}
  >
    <Container>
      <Header 
        navigation={navigation}
        title={"주거공간 견적신청"}
      />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 10 }}
      >
        <SpaceSelect value={value} setValue={setValue} />
        <AddressSearch info={value} setInfo={setValue} />
        <SelectDate info={value} setInfo={setValue} />
        <PredictCost info={value} setInfo={setValue} />
        <AreaInput value={value} setValue={setValue} />
        <ConstructionSelect value={value} setValue={setValue} />
        <SpaceCount value={value} setValue={setValue} />
        <CurrentPicture imagePicker={imagePicker} current={current} setCurrent={setCurrent} imageClean={imageClean} />
        <MemoInput value={value} setValue={setValue} />
      </ScrollView>
      <ButtonView>
        <TouchableOpacity onPress={() => regist()}>
          <Button>
            <ButtonText>견적신청</ButtonText>
          </Button>
        </TouchableOpacity>
      </ButtonView>
    </Container>
  </KeyboardAvoidingView>
)