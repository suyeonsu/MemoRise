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
import { styles } from "../../../screens/Main/MainStyle";

import { calculateDynamicWidth } from "../../../constants/dynamicSize";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MemoItem = () => {
  return (
    <>
      <View style={styles.memoContainer}>
        <View style={tempstyles.memoSize}>
          <LinearGradient
            colors={["#FFFFFF", "#F5F5F5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{ flex: 1 }}
          >
            <Text style={tempstyles.calendar}>2023. 09. 22</Text>
          </LinearGradient>
        </View>
      </View>
      <Pressable>
        <Image
          source={require("../../../assets/icons/bookmarkblue.png")}
          style={tempstyles.bookmarkSize}
        />
      </Pressable>
    </>
  );
};

export default MemoItem;

const tempstyles = StyleSheet.create({
  memoSize: {
    width: calculateDynamicWidth(306),
    height: calculateDynamicWidth(306),
  },

  bookmarkSize: {
    width: calculateDynamicWidth(17),
    height: calculateDynamicWidth(23),
    marginLeft: calculateDynamicWidth(50),
    bottom: calculateDynamicWidth(520),
    position: "absolute",
  },

  calendar: {
    top: calculateDynamicWidth(9),
    marginLeft: calculateDynamicWidth(225),
    color: "#CCCCCC",
  },
});
