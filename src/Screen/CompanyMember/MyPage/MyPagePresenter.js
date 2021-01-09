import React from "react";
import styled from "styled-components/native";
import { backgroundColor } from "../../../common/theme";
import ProfileHeader from "../../../Components/CompanyMyPage/ProfileHeader";
import ProfileMenu from "../../../Components/CompanyMyPage/ProfileMenu";
import UserSocial from "../../../Components/CompanyMyPage/UserSocial";

const Container = styled.View`
  flex: 1;
  background-color: ${backgroundColor};
`;

export default ({ navigation, companyInfo, logout }) => (
  <Container>
    <ProfileHeader
      image_path={companyInfo.profile}
      nick_name={companyInfo.business_name}
    />
    <UserSocial />
    <ProfileMenu
      navigation={navigation}
      logout={logout}
    />
  </Container>
)