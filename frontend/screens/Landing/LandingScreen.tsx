import { View, Text, StyleSheet, Image } from "react-native";

const LandingScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/image/logo/logo.png")}
      />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 312,
    height: 57,
  },
});
