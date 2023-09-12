import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Colors from "../../constants/colors";

const LandingScreen = () => {
  // Dimension
  const screenWidth = Dimensions.get("window").width;

  const baseScreenWidth = 360; // 기준 너비
  const targetImageWidth = 320; // 기준 너비일 때의 이미지 너비
  const targetLogoWidth = 253; // 기준 너비일 때의 로고 너비
  const targetKakaoWidth = 230; // 기준 너비일 때의 카카오 너비

  const dynamicImageWidth = (screenWidth / baseScreenWidth) * targetImageWidth;
  const dynamicLogoWidth = (screenWidth / baseScreenWidth) * targetLogoWidth;
  const dynamicKakaoWidth = (screenWidth / baseScreenWidth) * targetKakaoWidth;

  const targetImageHeight = 333; // 기준 너비일 때의 이미지 높이
  const targetLogoHeight = 48; // 기준 너비일 때의 로고 & 카카오 높이

  const imageAspectRatio = targetImageWidth / targetImageHeight;
  const logoAspectRatio = targetLogoWidth / targetLogoHeight;
  const kakaoAspectRatio = targetKakaoWidth / targetLogoHeight;

  const dynamicImageHeight = dynamicImageWidth / imageAspectRatio;
  const dynamicLogoHeight = dynamicLogoWidth / logoAspectRatio;
  const dynamicKakaoHeight = dynamicKakaoWidth / kakaoAspectRatio;

  const imageStyle = {
    width: dynamicImageWidth,
    height: dynamicImageHeight,
  };

  const logoStyle = {
    width: dynamicLogoWidth,
    height: dynamicLogoHeight,
  };

  const kakaoStyle = {
    width: dynamicKakaoWidth,
    height: dynamicKakaoHeight,
  };

  return (
    <LinearGradient
      //   colors={["#F5F5F5", "red"]}
      colors={["#F5F5F5", "#E9E9E9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.rootContainer}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/image/note_sm.png")}
            style={imageStyle}
          />
          <Image
            source={require("../../assets/image/logo/logo.png")}
            style={[logoStyle, styles.logo]}
          />
          <Pressable style={styles.kakao}>
            <Image
              source={require("../../assets/image/kakao.png")}
              style={kakaoStyle}
            />
          </Pressable>
        </View>
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
  logo: {
    position: "absolute",
    top: "27%",
  },
  kakao: {
    position: "absolute",
    bottom: "27%",
  },
});
