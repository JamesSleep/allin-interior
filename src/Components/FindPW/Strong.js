import React from "react";
import styled from "styled-components/native";
import { buttonColor } from "../../common/theme";

const Text = styled.Text`
  font-size: 16px;
`;
const StrongText = styled.Text`
  font-size: 16px;
  color: ${buttonColor};
`;

export default ({ children }) => {
  const convertingGeneric = (text="", front=0, back=0) => {
    let convertedText = "";
    for(let i=front; i<=back; i++) {
      convertedText += text[i];
    }
    return convertedText;
  }
  const convertingStrong = (text="", front=0, back=0) => {
    let convertedText = "";
    for(let i=front+1; i<back; i++) {
      convertedText += text[i];
    }
    return <StrongText key={front}>{convertedText}</StrongText>
  }
  const convertingText = (text="") => {
    let textArray = [];
    let searchIndex = 0;
    let frontToken = null, backToken = null;

    for(let i=0; i<text.length; i++) {
      if(text[i] === "/" && frontToken === null) {
        if(i > 0) {
          textArray.push(
            convertingGeneric(text,searchIndex,i-1)
          );
          frontToken = i;
        }
        else {
          frontToken = i;
        }
      } else if (text[i] === "/" && backToken === null) {
        backToken = i;
        textArray.push(
          convertingStrong(text,frontToken,backToken)
        );
        frontToken = null;
        backToken = null;
        searchIndex = i + 1;
      } else if (i === text.length - 1) {
        textArray.push(
          convertingGeneric(text,searchIndex,i)
        );
      }
    }
    return <Text>{textArray}</Text>;
  }
  return (
    <>
      { convertingText(children) }
    </>
  )
}