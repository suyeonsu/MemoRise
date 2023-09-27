// 라이브러리
import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

// 컴포넌트
import GoBackHeader from "../../../components/Header/GoBackHeader";
import { RootState } from "../../../store/store";
import BookMarkBtn from "../../../components/Button/BookMarkBtn";

// 스타일
import { styles } from "./MemoStyle";
import Colors from "../../../constants/colors";
import { calculateDynamicWidth } from "../../../constants/dynamicSize";

// 통신
import { BACKEND_URL } from "../../../util/http";

const SavedMemoScreen = () => {
  // 타입
  type BookMarkMemoProps = {
    accessType: string;
    content: string;
    file: string | null;
    isBookmarked: boolean;
    itemImage: string | null;
    memoSeq: number;
    nickname: string;
    updatedAt: string;
  };

  type BookMarkListProps = {
    item: BookMarkMemoProps;
  };

  // 데이터 상태관리
  const [bookmarkData, setBookmarkData] = useState<BookMarkMemoProps[]>([]);

  // 유저 ID
  const userId = useSelector((state: RootState) => state.userInfo.id);

  // 백엔드 통신
  useEffect(() => {
    axios
      // .get(BACKEND_URL + `/user/${userId}/bookmarks`)
      // 쫀디기
      .get(BACKEND_URL + "/user/23/bookmarks")
      .then((response) => {
        setBookmarkData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <LinearGradient
        colors={["#F5F5F5", "#E9E9E9"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
      >
        <GoBackHeader />
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
      </LinearGradient>
    </>
  );
};

export default SavedMemoScreen;

const savedmemostyles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateY: -calculateDynamicWidth(350) / 2 },
      { translateX: -calculateDynamicWidth(306) / 2 },
    ],
  },

  memoWriteContainer: {
    alignItems: "flex-end",
    marginBottom: calculateDynamicWidth(3),
  },

  memoWrite: {
    width: calculateDynamicWidth(38),
    height: calculateDynamicWidth(38),
  },

  memoListContainer: {
    height: calculateDynamicWidth(350),
  },

  memoContainer: {
    width: calculateDynamicWidth(306),
    minHeight: calculateDynamicWidth(104),
    maxHeight: calculateDynamicWidth(185),
    borderRadius: calculateDynamicWidth(15),
    marginBottom: calculateDynamicWidth(12),
    overflow: "scroll",
  },

  innerContainer: {
    margin: calculateDynamicWidth(9),
    flex: 1,
    justifyContent: "space-between",
  },

  bookmark: {
    position: "absolute",
    top: 0,
    marginLeft: calculateDynamicWidth(16),
  },

  bookmarkSize: {
    width: calculateDynamicWidth(17),
    height: calculateDynamicWidth(23),
  },

  calenderContainer: {
    alignItems: "flex-end",
  },

  calendar: {
    color: Colors.hover,
    fontFamily: "Pretendard-Regular",
    fontSize: calculateDynamicWidth(14),
  },

  content: {
    color: Colors.text,
    fontSize: calculateDynamicWidth(18),
    fontFamily: "Pretendard-Regular",
    marginVertical: calculateDynamicWidth(5),
    marginHorizontal: calculateDynamicWidth(10),
  },

  photo: {
    width: calculateDynamicWidth(275),
    height: calculateDynamicWidth(60),
    borderRadius: calculateDynamicWidth(10),
    marginLeft: calculateDynamicWidth(5),
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nickname: {
    color: Colors.blue500,
    fontFamily: "Pretendard-Medium",
    fontSize: calculateDynamicWidth(14),
  },

  open: {
    color: "rgba(76, 106, 255, 0.6)",
    fontFamily: "Pretendard-Medium",
    fontSize: calculateDynamicWidth(14),
  },
});
