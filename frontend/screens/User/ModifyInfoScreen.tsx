// 라이브러리
import axios from "axios";
import { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useDispatch, useSelector } from "react-redux";

// 컴포넌트
import GoBackHeader from "../../components/Header/GoBackHeader";
import ProfilePic from "../../components/ProfilePic";
import ConfirmBtn from "../../components/Button/ConfirmBtn";

// 리덕스
import { RootState } from "../../store/store";

// 스타일
import { styles } from "./UserInputStyle";

import { setNickname, setProfileImg } from "../../store/user";

// 백엔드 URL
import { BACKEND_URL, S3_URL } from "../../util/http";

const ModifyInfoScreen = () => {
  const ConfirmHandler = () => {};

  return (
    <LinearGradient
      // colors={["#F5F5F5", "red"]}
      colors={["#F5F5F5", "#E9E9E9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <GoBackHeader />
      <View style={styles.container}>
        <View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.profilebox}>
              <ProfilePic />
              <Image
                source={require("../../assets/icons/album.png")}
                style={styles.album}
              />
            </View>
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.text}>닉네임</Text>
            <TextInput style={styles.input} />
            <Text style={styles.infoText}>
              한글, 영어, 숫자만 사용할 수 있어요. (최대 10자)
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <ConfirmBtn onPress={ConfirmHandler}>확인</ConfirmBtn>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ModifyInfoScreen;
