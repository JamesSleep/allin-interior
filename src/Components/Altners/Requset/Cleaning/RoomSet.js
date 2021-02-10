import React from "react";
import styled from "styled-components/native";
import ConstructionSelect from "../Residential/ConstructionSelect";
import SpaceCount from "../Residential/SpaceCount";
import { ScrollView } from "react-native";

export default ({ value, setValue }) => (
  <ScrollView
    contentContainerStyle={{ paddingHorizontal: 20 }}
  >
    <ConstructionSelect value={value} setValue={setValue} />
    <SpaceCount value={value} setValue={setValue} />
  </ScrollView>
)