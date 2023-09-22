// 라이브러리
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

// 스타일
import { calculateDynamicWidth } from "../../../constants/dynamicSize";
import { TextInput } from "react-native-gesture-handler";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MemoItem = () => {
  return (
    <>
      <View style={styles.memoContainer}>
        <LinearGradient
          colors={["#FFFFFF", "#F5F5F5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <View style={styles.innerContainer}>
            <View style={styles.calenderContainer}>
              <Text style={styles.calendar}>2023. 09. 22</Text>
            </View>
            <Text style={styles.content}>
              준형이는 배가 고프다. 오늘 봉골레 파스타가 너무 기대된다.
            </Text>
            <View style={styles.bottomContainer}>
              <Text style={styles.nickname}>권소정</Text>
              <Text style={styles.open}>전체공개</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <Pressable>
        <Image
          source={require("../../../assets/icons/bookmarkblue.png")}
          style={styles.bookmarkSize}
        />
      </Pressable>
    </>
  );
};

export default MemoItem;

const styles = StyleSheet.create({
  memoContainer: {
    width: calculateDynamicWidth(306),
    height: calculateDynamicWidth(104),
    maxHeight: calculateDynamicWidth(306),
    borderRadius: calculateDynamicWidth(15),
    overflow: "scroll",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [
      { translateY: -calculateDynamicWidth(306) / 2 },
      { translateX: -calculateDynamicWidth(306) / 2 },
    ],
  },

  innerContainer: {
    margin: calculateDynamicWidth(9),
  },

  bookmarkSize: {
    width: calculateDynamicWidth(17),
    height: calculateDynamicWidth(23),
    marginLeft: calculateDynamicWidth(50),
    bottom: calculateDynamicWidth(520),
    position: "absolute",
  },

  calenderContainer: {
    alignItems: "flex-end",
  },

  calendar: {
    color: "#CCCCCC",
    fontFamily: "Pretendard-Regular",
  },

  content: {
    color: "#2C2C2C",
    fontSize: 18,
    fontFamily: "Pretendard-Regular",
    marginVertical: 5,
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nickname: {
    color: "#4C6AFF",
    fontFamily: "Pretendard-Medium",
  },

  open: {
    color: "rgba(76, 106, 255, 0.6)",
    fontFamily: "Pretendard-Medium",
  },
});
