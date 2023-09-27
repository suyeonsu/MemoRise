import React from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text } from "react-native";
import { RootStackParamList } from "../../../App";
import GoBackHeader from "../../../components/Header/GoBackHeader";

type MenuMemoScreenProps = {
  route: RouteProp<RootStackParamList, "MenuMemo">;
};

const MemuMemo: React.FC<MenuMemoScreenProps> = ({ route }) => {
  const { menuStatus } = route.params;

  return (
    <>
      <GoBackHeader />
      {menuStatus === "saved" && <Text>북마크 메모</Text>}
      {menuStatus === "all" && <Text>전체 메모</Text>}
      {menuStatus === "my" && <Text>내 메모</Text>}
    </>
  );
};

export default MemuMemo;
