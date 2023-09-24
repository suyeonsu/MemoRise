// 라이브러리
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Dimensions,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

// 스타일
import { calculateDynamicWidth } from "../../../constants/dynamicSize";
import Colors from "../../../constants/colors";

// 스크린 높이
const screenHeight = Dimensions.get("window").height;

// 이미지 최대 크기 설정
const MAX_WIDTH = calculateDynamicWidth(286);
const MAX_HEIGHT = screenHeight / 2;

const MemoDetail = () => {
  // 이미지 비율 축소를 위한 상태관리
  const [memoPic, setMemoPic] = useState(
    "https://b106-memorise.s3.ap-northeast-2.amazonaws.com/profile-image/dc971e2c-4a4a-4330-9dfe-ea691ad9bcdf.png"
  );
  const [imageWidth, setImageWidth] = useState(MAX_WIDTH);
  const [imageHeight, setImageHeight] = useState(MAX_HEIGHT);

  // 이미지 모달 상태관리
  const [isFullImageVisible, setIsFullImageVisible] = useState(false);

  // 이미지를 비율에 맞게 축소
  useEffect(() => {
    if (memoPic) {
      // 원본 이미지 크기
      Image.getSize(memoPic, (width, height) => {
        // 원본 이미지 비율 계산
        const aspectRatio = width / height;

        // 비율 유지하면서 크기 조절
        if (width > height) {
          setImageWidth(MAX_WIDTH);
          setImageHeight(MAX_WIDTH / aspectRatio);
        } else {
          setImageHeight(MAX_HEIGHT);
          setImageWidth(MAX_HEIGHT * aspectRatio);
        }
      });
    }
  }, [memoPic]);

  // 북마크 체크 여부 파악을 위한 상태관리
  const [isBookMark, setIsBookMark] = useState(false);

  // 북마크 체크에 따른 변경 함수
  const changeIsBookMark = () => {
    setIsBookMark(!isBookMark);
  };

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={["#FFFFFF", "#F5F5F5"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.memoContainer}
      >
        <View style={styles.innerContainer}>
          <View>
            <View style={styles.rowSpaceBetween}>
              <Text style={styles.calendar}>2023. 09. 24 오전 12:50</Text>
              <View style={styles.iconContainer}>
                <Pressable>
                  <Image
                    source={require("../../../assets/icons/update.png")}
                    style={styles.icon}
                  />
                </Pressable>
                <Pressable>
                  <Image
                    source={require("../../../assets/icons/delete.png")}
                    style={styles.icon}
                  />
                </Pressable>
              </View>
            </View>
            <View style={styles.rowSpaceBetween2}>
              <Text style={styles.nickname}>김준형</Text>
              <Text style={styles.open}>전체공개</Text>
            </View>
          </View>
          <ScrollView style={styles.contentContainer}>
            <Image
              source={{
                uri: "https://b106-memorise.s3.ap-northeast-2.amazonaws.com/profile-image/dc971e2c-4a4a-4330-9dfe-ea691ad9bcdf.png",
              }}
              style={styles.photo}
            />
            <Text style={styles.content}>
              Hate to give the satisfaction, asking how you're doing now. How's
              the castle built off people you pretend to care about? Just what
              you wantedLook at you, cool guy, you got it I see the parties and
              the
            </Text>
          </ScrollView>
        </View>
      </LinearGradient>
      <Pressable onPress={changeIsBookMark} style={styles.bookmark}>
        {isBookMark ? (
          <Image
            source={require("../../../assets/icons/bookmarkblue_fill.png")}
            style={styles.bookmarkSize}
          />
        ) : (
          <Image
            source={require("../../../assets/icons/bookmarkblue.png")}
            style={styles.bookmarkSize}
          />
        )}
      </Pressable>
    </View>
  );
};

export default MemoDetail;

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateY: -calculateDynamicWidth(306) / 2 },
      { translateX: -calculateDynamicWidth(306) / 2 },
    ],
  },

  memoContainer: {
    width: calculateDynamicWidth(306),
    minHeight: calculateDynamicWidth(104),
    borderRadius: calculateDynamicWidth(15),
  },

  innerContainer: {
    margin: calculateDynamicWidth(9),
    flex: 1,
  },

  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 3,
  },

  rowSpaceBetween2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },

  calendar: {
    color: Colors.hover,
    fontFamily: "Pretendard-Regular",
  },

  iconContainer: {
    flexDirection: "row",
  },

  icon: {
    width: calculateDynamicWidth(14),
    height: calculateDynamicWidth(14),
    marginLeft: 10,
  },

  nickname: {
    color: Colors.blue500,
    fontFamily: "Pretendard-Medium",
  },

  open: {
    color: "rgba(76, 106, 255, 0.6)",
    fontFamily: "Pretendard-Medium",
  },

  contentContainer: {
    maxHeight: calculateDynamicWidth(350),
  },

  photo: {
    width: calculateDynamicWidth(275),
    height: calculateDynamicWidth(60),
    borderRadius: calculateDynamicWidth(10),
    marginLeft: calculateDynamicWidth(5),
  },

  content: {
    color: Colors.text,
    fontSize: 18,
    fontFamily: "Pretendard-Regular",
    marginVertical: 5,
    marginHorizontal: 10,
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
});
