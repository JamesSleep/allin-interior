import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import styled from "styled-components/native";
import { _WIDTH } from "../../common/theme";

const Container = styled.View`
  width: 100%;
  height: 70px;
  padding: 0px 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const SearchBar = styled.View`
  width: 75%;
  height: 40px;
  padding: 0px 10px;
  border-width: 0.5px;
  border-color: gray;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  margin-left: 5px;
`;

export default ({ navigation }) => (
  <Container>
    <SearchBar>
      <Ionicons
        name={"search-outline"}
        color={"black"}
        size={_WIDTH / 20}
      />
      <TextInput
        placeholder="All In 쇼핑검색"
      />
    </SearchBar>
    <TouchableOpacity>
      <Ionicons
        name="bookmark-outline"
        color="#353b48"
        size={_WIDTH / 15}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
      <Ionicons
        name="cart-outline"
        color="#353b48"
        size={_WIDTH / 13}
      />
    </TouchableOpacity>
  </Container>
)