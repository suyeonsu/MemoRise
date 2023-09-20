import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Image, Pressable } from "react-native";
import KakaoLogins, {
  login,
  getProfile,
} from "@react-native-seoul/kakao-login";
import LinearGradient from "react-native-linear-gradient";

import { styles } from "./LoginStyle";

type RootStackParamList = {
  SignUp: undefined;
  Main: undefined;
};

const LoginScreen = () => {
  // 네비게이션
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // 카카오 사용자 정보 조회 함수
  const getProfileHandler = () => {
    getProfile()
      .then((response) => {
        // 백엔드에 이메일 정보 보내서 사용자 확인
        axios
          .post("http://j9b106.p.ssafy.io:8000/auth", {
            email: response.email,
          })
          .then((response) => {
            if (response.data === true) {
              console.log("가입된 회원입니다.");
              navigation.navigate("Main");
            } else {
              console.log("회원가입이 필요한 회원입니다.");
              navigation.navigate("SignUp");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 카카오 소셜 로그인 함수
  const loginHandler = async () => {
    await login()
      .then((response) => {
        // 사용자 프로필 정보 조회
        getProfileHandler();
      })
      .catch((error) => {
        console.log(error);
      });
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
            style={styles.image}
          />
          <Image
            source={require("../../assets/image/logo/logo.png")}
            style={styles.logo}
          />
          <Pressable style={styles.kakao} onPress={() => loginHandler()}>
            <Image
              source={require("../../assets/image/kakao.png")}
              style={styles.kakaoImage}
            />
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
