import React from "react";
import styled from "styled-components/native";
import CurrentPicture from "../Residential/CurrentPicture";
import MemoInput from "../Residential/MemoInput";

const Container = styled.View`
  padding: 0px 20px;
`;

export default ({ value, setValue, imagePicker, imageClean, current, setCurrent }) => (
  <Container>
    <CurrentPicture imagePicker={imagePicker} current={current} setCurrent={setCurrent} imageClean={imageClean} />
    <MemoInput value={value} setValue={setValue} />
  </Container>
)