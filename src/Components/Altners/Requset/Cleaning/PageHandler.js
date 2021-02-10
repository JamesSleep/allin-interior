import React from "react";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TouchableOpacity } from "react-native-gesture-handler";
import { buttonColor } from "../../../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
`;

const Next = styled.View`
  width: 110px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
`;

const NextText = styled.Text`
  font-size: 14px;
  color: white;
  margin-right: 5px;
`;

const Previous = styled.View`
  width: 110px;
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  padding-left: 10px;
`;

const PrevText = styled.Text`
  font-size: 14px;
  color: ${buttonColor};
  margin-left: 5px;
`;

export default ({ page, nextPage, regist }) => (
  <Container>
    <TouchableOpacity
      onPress={() => page > 0 && nextPage(page - 1)}
    >
      <Previous>
        { page > 0 && (
          <>
          <AntDesign name="left" size={15} color={buttonColor} />
          <PrevText>이전</PrevText>
          </>
        )}
      </Previous>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => page < 4 ? nextPage(page + 1) : regist()}>
      <Next>
        <NextText>{page === 4 ? "신청완료" : "다음단계"}</NextText>
        {page < 4 && (
          <AntDesign name="right" size={15} color="white" />
        )}
      </Next>
    </TouchableOpacity>
  </Container>
) 