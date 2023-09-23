// 라이브러리
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// 스타일
import { calculateDynamicWidth } from "../../../constants/dynamicSize";
import Colors from "../../../constants/colors";

const MemoDetail = () => {
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
                <Image
                  source={require("../../../assets/icons/update.png")}
                  style={styles.icon}
                />
                <Image
                  source={require("../../../assets/icons/delete.png")}
                  style={styles.icon}
                />
              </View>
            </View>
            <View style={styles.rowSpaceBetween}>
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
});
