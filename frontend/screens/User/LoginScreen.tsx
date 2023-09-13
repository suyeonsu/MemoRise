import { View, Image, StyleSheet, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import KakaoLogins from "@react-native-seoul/kakao-login";
import axios from "axios";

import {
  calculateDynamicHeight,
  calculateDynamicWidth,
} from "../../constants/dynamicSize";

const LandingScreen = () => {
  // 카카오 로그인 함수
  // 로직 : 카카오에 요청 보내서 정보 받아온 후,
  // 백엔드에 정보 보내서 사용자 검색해서 redirect
  const loginHandler = async () => {
    try {
      // 로그인 진행
      const result = await KakaoLogins.login();

      if (result.accessToken) {
        // 사용자 프로필 가져오기
        const userInfo = await KakaoLogins.getProfile();

        // 백엔드에 요청
        const response = await axios.post("http://j9b106.p.ssafy.io:8000", {
          id: userInfo.id,
          // 추후 추가 예정
        });

        if (response.data.isNewUser) {
          // 회원가입
        } else {
          // 메인페이지
        }
      }
    } catch (error) {
      // 변경예정
      console.log(error);
    }
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
          <Pressable
            style={styles.kakao}
            onPress={() => {
              loginHandler;
            }}
          >
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

const imageStyle = {
  width: calculateDynamicWidth(320),
  height: calculateDynamicHeight(320, 333, calculateDynamicWidth(320)),
};

const logoStyle = {
  width: calculateDynamicWidth(253),
  height: calculateDynamicHeight(253, 48, calculateDynamicWidth(253)),
};

const kakaoStyle = {
  width: calculateDynamicWidth(230),
  height: calculateDynamicHeight(230, 48, calculateDynamicWidth(230)),
};
