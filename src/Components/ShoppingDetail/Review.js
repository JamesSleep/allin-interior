import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import { buttonColor, _WIDTH } from "../../common/theme";

const Container = styled.View``;

const WriteView = styled.View`
  position: absolute;
  top: 5px;
  right: 20px;
`;

const WriteButton = styled.Text`
  color: ${buttonColor};
  font-size: ${_WIDTH / 30}px;
`;

const ReviewBox = styled.View`
  padding: 20px 20px;
`;

const ProfileRow = styled.View`
  flex-direction: row;
`;

const Profile = styled.Image`
  width: ${_WIDTH * 0.11}px;
  height: ${_WIDTH * 0.11}px;
  margin-right: 10px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 50px;
`;

const NameView = styled.View`
  justify-content: center;
`;

const Nickname = styled.Text`
  margin-bottom: 3px;
  font-size: ${_WIDTH / 30}px;
`;

const ScoreView = styled.View`
  flex-direction: row;
`;

const Date = styled.Text`
  margin-left: 10px;
  font-size: ${_WIDTH / 32}px;
  color: gray;
`;

const ProductInfo = styled.Text`
  margin: 10px 0px;
`;

const UploadImage = styled.Image`
  width: ${_WIDTH * 0.35}px;
  height: ${_WIDTH * 0.25}px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const ReviewText = styled.Text`
  width: ${_WIDTH * 0.7}px;
  font-size: ${_WIDTH / 32}px;
  margin-bottom: 5px;
`;

const LikeView = styled.View`
  flex-direction: row;
  align-items: center;
`;

const LikeButton = styled.View`
  width: ${_WIDTH * 0.25}px;
  height: ${_WIDTH / 14}px;
  flex-direction: row;
  border-width: 1px;
  border-color: ${buttonColor};
  border-radius: 5px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

const LikeText = styled.Text`
  color: ${buttonColor};
  font-size: ${_WIDTH / 32}px;
  margin-left: 5px;
`;

const LikeCount = styled.Text`
  font-size: ${_WIDTH / 32}px;
`;

export default () => (
  <Container>
    <WriteView>
      <TouchableOpacity>
        <WriteButton>리뷰작성</WriteButton>
      </TouchableOpacity>
    </WriteView>
    <ReviewBox>
      <ProfileRow>
        <Profile source={require("../../Image/logo.png")} />
        <NameView>
          <Nickname>닉네임</Nickname>
          <ScoreView>
            <AntDesign name="star" color="#e58e26" size={_WIDTH / 25} />
            <Date>2021.01.07</Date>
          </ScoreView>
        </NameView>
      </ProfileRow>
      <ProductInfo>상품명 / 레드 / 커버 1개</ProductInfo>
      <UploadImage source={require("../../Image/example1.jpg")} />
      <ReviewText>색깔이 너무 이뻐요! 레드컬러라 그런지 방이 화사해진 느낌이었어요.</ReviewText>
      <LikeView>
        <TouchableOpacity>
          <LikeButton>
            <Octicons name="thumbsup" size={_WIDTH / 28} color={buttonColor} />
            <LikeText>도움이 돼요</LikeText>
          </LikeButton>
        </TouchableOpacity>
        <LikeCount>5명에게 도움이 되었습니다</LikeCount>
      </LikeView>
    </ReviewBox>
  </Container>
)