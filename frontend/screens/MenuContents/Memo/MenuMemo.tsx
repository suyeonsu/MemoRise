// 라이브러리
import axios from "axios";
import React, { useState, useEffect } from "react";
import { RouteProp } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

// 타입
import { RootStackParamList } from "../../../App";
import { RootState } from "../../../store/store";

// 컴포넌트
import GoBackHeader from "../../../components/Header/GoBackHeader";
import MemoList from "../../../components/Modal/Memo/MemoList";

// 스타일
import { styles } from "./MemoStyle";
import { BACKEND_URL } from "../../../util/http";

// 메뉴메모스크린 타입
type MenuMemoScreenProps = {
  route: RouteProp<RootStackParamList, "MenuMemo">;
};

// 메모 정보 타입
type MemoInfoType = {
  memoSeq: number;
  content: string;
  accessType: string;
  nickname: string;
  updatedAt: string;
  file: string | null;
  itemImage: string | null;
  isBookmarked: boolean;
};

const MemuMemo: React.FC<MenuMemoScreenProps> = ({ route }) => {
  // 메뉴 상태값 : saved-북마크 / all-전체 / my-내가 작성한
  const { menuStatus } = route.params;

  // 유저 아이디 (axios 통신용)
  const userId = useSelector((state: RootState) => state.userInfo.id);

  // 백엔드에서 주어준 정보
  const [memoData, setMemoData] = useState<MemoInfoType[]>([]);

  // AXIOS
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          BACKEND_URL +
            // 쫀디기
            `/user/23/${
              menuStatus === "saved"
                ? "bookmarks"
                : menuStatus === "all"
                ? "memos"
                : "my-memos"
            }`
        )
        .then((response) => {
          setMemoData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  // 메모리스트 처리를 위한 더미 함수
  const dummyHandler = () => {
    console.log("히히 더미 함수지롱~~");
  };

  // 메모리스트 컴포넌트 상태관리
  const [isMemoList, setIsMemoList] = useState(true);

  // 메모디테일 컴포넌트 상태관리
  const [isMemoDetail, setIsMemoDetail] = useState(false);

  // 메모리스트 컴포넌트 닫고, 메모디테일 컴포넌트 열기
  const onDetailMemoHandler = () => {
    setIsMemoList(false);
    setIsMemoDetail(true);
  };

  return (
    <>
      {memoData.length > 0 ? (
        // 메모 있을 때..
        <LinearGradient
          colors={["#F5F5F5", "#E9E9E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          {isMemoList && (
            <>
              <GoBackHeader />
              <MemoList
                onMemoWritePress={dummyHandler}
                onMemoDetailPress={onDetailMemoHandler}
                id={null}
                memoStatus={menuStatus}
              />
            </>
          )}
          {isMemoDetail && (
            <>
              <GoBackHeader />
            </>
          )}
        </LinearGradient>
      ) : (
        // 메모 없을 때..
        <LinearGradient
          colors={["#F5F5F5", "#E9E9E9"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <GoBackHeader />
          {menuStatus === "saved" && (
            <View>
              <Text style={styles.title}>저장된 메모</Text>
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/icons/memo_empty.png")}
                />
                <Text style={styles.empty}>저장된 메모가 없습니다</Text>
              </View>
            </View>
          )}
          {menuStatus === "all" && (
            <View>
              <Text style={styles.title}>전체 메모</Text>
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/icons/memo_empty.png")}
                />
                <Text style={styles.empty}>메모가 없습니다</Text>
              </View>
            </View>
          )}
          {menuStatus === "my" && (
            <View>
              <Text style={styles.title}>내 메모</Text>
              <View style={styles.container}>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/icons/memo_empty.png")}
                />
                <Text style={styles.empty}>작성한 메모가 없습니다</Text>
              </View>
            </View>
          )}
        </LinearGradient>
      )}
    </>
  );
};

export default MemuMemo;
