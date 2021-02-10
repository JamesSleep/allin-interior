import React from "react";
import styled from "styled-components/native";
import Header from "../../../Components/Altners/Requset/Header";
import { backgroundColor } from "../../../common/theme";
import SelectStyle from "../../../Components/Altners/Requset/Cleaning/SelectStyle";
import PageHandler from "../../../Components/Altners/Requset/Cleaning/PageHandler";
import SelectDate from "../../../Components/Altners/Requset/Cleaning/SelectDate";
import RoomInput from "../../../Components/Altners/Requset/Cleaning/RoomInput";
import RoomSet from "../../../Components/Altners/Requset/Cleaning/RoomSet";
import Reference from "../../../Components/Altners/Requset/Cleaning/Reference";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

const Content = styled.View`
  flex: 1;
`;

export default ({ navigation, value, setValue, page, setPage, imagePicker, imageClean, current, setCurrent, regist }) => (
  <Container>
    <Header 
      navigation={navigation}
      title={"청소 견적신청"}
    />
    <Content>
      { page === 0 && (
        <SelectStyle value={value} setValue={setValue} />
      )}
      { page === 1 && (
        <SelectDate value={value} setValue={setValue} />
      )}
      { page === 2 && (
        <RoomInput value={value} setValue={setValue} />
      )}
      { page === 3 && (
        <RoomSet value={value} setValue={setValue} />
      )}
      { page === 4 && (
        <Reference value={value} setValue={setValue} imagePicker={imagePicker} imageClean={imageClean} current={current} setCurrent={setCurrent} />
      )}
    </Content>
    <PageHandler page={page} nextPage={setPage} regist={regist} />
  </Container>
)