import { View, Text, StyleSheet, Dimensions } from "react-native";

import { calculateDynamicWidth } from "../../../constants/dynamicSize";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const MemoItem = () => {
  return (
    <View>
      <Text>메모 모달</Text>
    </View>
  );
};

export default MemoItem;
