import React from "react";
import { _WIDTH, buttonColor } from "../../../common/theme";
import { imagePathFormat } from "../../../utils/imagePathFormat";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Container = styled.View`
  width: 100%;
  height: ${_WIDTH * 0.18}px;
  flex-direction: row;
  align-items: center;
  padding: 0px ${_WIDTH/15}px;
`;

const Image = styled.Image`
  width: ${_WIDTH * 0.13}px;
  height: ${_WIDTH * 0.13}px;
  border-radius: 50px;
  margin-right: ${_WIDTH/25}px;
`;

const Name = styled.Text`
  font-size: ${_WIDTH / 30}px;
  font-weight: 500;
`;

const FollowView = styled.View`
  position: absolute;
  right: 30px;
  flex-direction: row;
`;

const FollowButton = styled.View`
  width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.followed ? "#cccccc" : "#ff7675"};
  border-radius: 20px;
`;

const FollowText = styled.Text`
  font-size: 13px;
  color: white;
`;

const ModifyButton = styled.View`
  margin-right: 15px;
  width: 50px;
  height: 30px;
  background-color: #f1f2f6;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ModifyText = styled.Text`
  font-size: 13px;
`;

const DeleteButton = styled.View`
  width: 50px;
  height: 30px;
  background-color: #f1f2f6;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const DeleteText = styled.Text`
  font-size: 13px;
`;

export default ({ profile, nickname, mb_index, data, deleteStory, follow, userInfo, newFollow, deleteFollow }) => (
  <Container>
    <Image 
      source={{ uri: imagePathFormat(profile) }}
    />
    <Name>{nickname}</Name>
    <FollowView>
      { data.user_info.mb_index === mb_index ? (
        <>
        <TouchableOpacity onPress={() => deleteStory()}>
          <DeleteButton>
            <DeleteText>삭제</DeleteText>
          </DeleteButton>
        </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (follow?.length > 0) {
              const array = follow.filter(item => item.follower === userInfo);
              if(array.length > 0) {
                deleteFollow(array[0].fl_index);
              } else {
                newFollow();
              }
            } else {
              newFollow();
            }
          }}
        >
          <FollowButton
            followed={
              follow?.length > 0 &&
              follow.filter(item => item.follower === userInfo).length > 0
            }
          >
            <FollowText>
              { follow?.length > 0 ?
                  follow.filter(item => item.follower === userInfo).length > 0 ?
                    "팔로잉" : "팔로우"
                  :
                  "팔로우"
              }
            </FollowText>
          </FollowButton>
        </TouchableOpacity>
      )}
    </FollowView>
  </Container>
);