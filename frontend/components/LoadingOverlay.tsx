import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

const LoadingOverlay = () => {
  return (
    <View style={styles.Container}>
      <ActivityIndicator size="large" color="#2C2C2C" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
