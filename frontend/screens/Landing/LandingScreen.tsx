import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../../App";

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Landing"
>;

type Props = {
  navigation: LandingScreenNavigationProp;
};

const LandingScreen: React.FC<Props> = ({ navigation }) => {
  // Dimension
  const screenWidth = Dimensions.get("window").width;

  const baseScreenWidth = 360; // 기준 너비
  const targetImageWidth = 312; // 기준 너비일 때의 이미지 너비

  const dynamicImageWidth = (screenWidth / baseScreenWidth) * targetImageWidth;

  const targetImageHeight = 57; // 기준 너비일 때의 이미지 높이

  const imageAspectRatio = targetImageWidth / targetImageHeight;
  const dynamicImageHeight = dynamicImageWidth / imageAspectRatio;

  const imageStyle = {
    width: dynamicImageWidth,
    height: dynamicImageHeight,
  };

  // 애니메이션
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const animatedStyles = {
    opacity,
    transform: [{ translateY }],
  };

  // 페이지 자동 전환
  useEffect(() => {
    let a = setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
    return () => {
      clearTimeout(a);
    };
  });

  return (
    <LinearGradient
      // colors={["#F5F5F5", "red"]}
      colors={["#F5F5F5", "#E9E9E9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.rootContainer}>
        <Animated.Image
          source={require("../../assets/image/logo/logo.png")}
          style={[imageStyle, animatedStyles]}
        />
      </View>
    </LinearGradient>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
