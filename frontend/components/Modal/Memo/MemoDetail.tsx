import { View, Text, StyleSheet } from "react-native";

const MemoDetail = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>메모 상세 조회</Text>
    </View>
  );
};

export default MemoDetail;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "red",
    width: 200,
    height: 200,
    position: "absolute",
  },
});
