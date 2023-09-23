import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RouteProp } from "@react-navigation/native";

import GoBackHeader from "../../../components/Header/GoBackHeader";
import { BACKEND_URL } from "../../../util/http";
import { RootStackParamList } from "../../../App";
import { StackNavigationProp } from "@react-navigation/stack";

type GroupDetailScreenProps = {
  route: RouteProp<RootStackParamList, "GroupDetail">;
  navigation: StackNavigationProp<RootStackParamList, "GroupDetail">;
};

const GroupDetailScreen: React.FC<GroupDetailScreenProps> = ({
  route,
  navigation,
}) => {
  const { teamSeq, userSeq } = route.params;
  const [memoData, setMemoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: BACKEND_URL + `/teams/${teamSeq}/${userSeq}`,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [memoData]);

  return (
    <LinearGradient
      colors={["#F5F5F5", "#E9E9E9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <GoBackHeader />
      <View>
        <Text>그룹 상세 페이지</Text>
      </View>
    </LinearGradient>
  );
};

export default GroupDetailScreen;
