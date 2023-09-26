import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useSelector } from "react-redux";

import SmallBtn from "../../../components/Button/SmallBtn";
import GoBackHeader from "../../../components/Header/GoBackHeader";
import SeachInput from "../../../components/SearchInput";
import { calculateDynamicWidth } from "../../../constants/dynamicSize";
import { RootState } from "../../../store/store";
import { BACKEND_URL } from "../../../util/http";
import { styles } from "./GroupStyle";
import GroupBox from "../../../components/GroupBox";

type RootStackParamList = {
  MakeGroup: undefined;
  GroupDetail: GroupDetailParams;
};

type GroupDetailParams = {
  teamSeq: number;
  userSeq: number;
};

type GroupData = [
  {
    teamSeq: number;
    teamName: string;
    myProfile: string;
    ownerProfile: string | null;
    memberProfiles: [string];
    password: boolean;
    owner: boolean;
    participated: boolean;
  }
];

const FindGroupScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const MakeGroupHandler = () => navigation.navigate("MakeGroup");
  const userId = useSelector((state: RootState) => state.userInfo.id);
  const [groupData, setGroupData] = useState<GroupData | null>(null);

  // 그룹 터치 시
  const onPressGroupHandler = (
    teamSeq: number,
    participated: boolean,
    password: boolean
  ) => {
    // 이미 참여 중인 그룹일 때
    if (participated) {
      navigation.navigate("GroupDetail", {
        teamSeq: teamSeq,
        userSeq: userId,
      });
    }
  };

  // 전체 그룹 목록 가져오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: BACKEND_URL + `/teams/${userId}`,
        });
        setGroupData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <LinearGradient
      colors={["#F5F5F5", "#E9E9E9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <GoBackHeader />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>그룹 찾기</Text>
          <SmallBtn onPress={MakeGroupHandler}>만들기</SmallBtn>
        </View>
        <View style={{ marginTop: calculateDynamicWidth(25) }}>
          <SeachInput />
        </View>
        {groupData && (
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={styles.groupContainer}
            data={groupData}
            keyExtractor={(item) => item.teamSeq.toString()}
            renderItem={({ item }) => (
              <GroupBox
                teamName={item.teamName}
                myProfile={item.myProfile}
                memberProfiles={item.memberProfiles}
                ownerProfile={item.ownerProfile}
                owner={item.owner}
                goDetailHandler={() =>
                  onPressGroupHandler(
                    item.teamSeq,
                    item.participated,
                    item.password
                  )
                }
                teamSeq={item.teamSeq}
              />
            )}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default FindGroupScreen;
