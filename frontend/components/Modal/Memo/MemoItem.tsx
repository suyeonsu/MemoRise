// 라이브러리
import { View, Text, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// 스타일
import { styles } from "../../../screens/Main/MainStyle";

import { calculateDynamicWidth } from "../../../constants/dynamicSize";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MemoItem = () => {
  return (
    <View style={styles.memoContainer}>
      <View style={tempstyles.memoSize}>
        <LinearGradient
          colors={["#FFFFFF", "#F5F5F5"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <Text>메모 모달</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

export default MemoItem;

const tempstyles = StyleSheet.create({
  memoSize: {
    width: calculateDynamicWidth(306),
    height: calculateDynamicWidth(306),
  },
});
