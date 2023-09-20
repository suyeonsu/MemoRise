import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  Image,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { BlurView } from "@react-native-community/blur";
import { Camera, useCameraDevices } from "react-native-vision-camera";

import MainHeader from "../../components/Header/MainHeader";
import { styles } from "./MainStyle";

import { setCameraActive } from "../../store/cameraSlice";
import { RootState } from "../../store/store";

const MainScreen = () => {
  // 알림 모달
  const [isNotificationModalVisible, setNotificationModalVisible] =
    useState(false);

  const closeNotificationModal = () => {
    setNotificationModalVisible(false);
  };

  // 추가 버튼 모달
  const [isMemoBtnModalVisible, setMemoBtnModalVisible] = useState(false);

  const closeMemoBtnModal = () => {
    setMemoBtnModalVisible(false);
  };

  // 카메라 허용 권한 확인
  const devices = useCameraDevices();
  const device = devices.back;

  // 카메라 활성 상태 관리
  const dispatch = useDispatch();
  const isCameraActive = useSelector(
    (state: RootState) => state.camera.isCameraActive
  );
  useEffect(() => {
    checkPermission();
    setCameraActive(true);
    reloadCamera();
  }, []);

  const checkPermission = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission === "denied") {
      return Camera.requestCameraPermission();
    }
  };

  // 카메라의 key를 위한 state 추가
  const [cameraKey, setCameraKey] = useState(Math.random().toString());

  const reloadCamera = () => {
    // 카메라의 key 값을 변경하여 카메라를 리로드
    setCameraKey(Math.random().toString());
  };

  if (device == null) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1 }}>
      {!isNotificationModalVisible && (
        <View style={styles.headerContainer}>
          <MainHeader
            openModal={() => {
              dispatch(setCameraActive(false)),
                setNotificationModalVisible(true);
            }}
          />
        </View>
      )}
      <View style={styles.rootContainer}>
        <Camera
          key={cameraKey}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isCameraActive}
          photo
        />
        <Pressable
          style={styles.btnContainer}
          onPress={() => setMemoBtnModalVisible(true)}
        >
          <Image
            source={require("../../assets/image/mainbtn.png")}
            style={styles.addBtn}
          />
        </Pressable>
      </View>

      {/* 알림 모달 */}
      {isNotificationModalVisible && (
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          blurType="dark"
          blurAmount={4}
        >
          <Modal
            transparent={true}
            animationType="slide"
            visible={isNotificationModalVisible}
            onRequestClose={closeNotificationModal}
          >
            {/* 헤더 */}
            <View style={styles.header}>
              <Pressable>
                <Image
                  source={require("../../assets/image/logo/logowhite.png")}
                  style={styles.logo}
                />
              </Pressable>
              <Pressable
                style={styles.cancelContainer}
                onPress={closeNotificationModal}
              >
                <Image
                  source={require("../../assets/icons/cancelwhite.png")}
                  style={styles.cancel}
                />
              </Pressable>
            </View>

            <View style={styles.modalEmptyContainer}>
              <Text style={styles.modalEmpty}>알림 없음</Text>
            </View>
          </Modal>
        </BlurView>
      )}

      {/* 메모 버튼 모달 */}
      {isMemoBtnModalVisible && (
        <BlurView
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          blurType="dark"
          blurAmount={4}
        >
          <Modal
            transparent={true}
            animationType="fade"
            visible={isMemoBtnModalVisible}
            onRequestClose={closeMemoBtnModal}
          >
            <View style={styles.memoBtnWrap}>
              <View style={styles.memoBtnContainer}>
                <Text style={styles.memoBtnText}>메모 조회하기</Text>
                <Pressable>
                  <Image
                    source={require("../../assets/image/memoreadbtn.png")}
                    style={styles.addBtn}
                  />
                </Pressable>
              </View>
              <View style={styles.memoBtnContainer}>
                <Text style={styles.memoBtnText}>메모 작성하기</Text>
                <Pressable>
                  <Image
                    source={require("../../assets/image/memocreatebtn.png")}
                    style={styles.addBtn}
                  />
                </Pressable>
              </View>
            </View>

            <Pressable onPress={closeMemoBtnModal} style={styles.btnContainer}>
              <Image
                source={require("../../assets/image/cancelbtn.png")}
                style={styles.addBtn}
              />
            </Pressable>
          </Modal>
        </BlurView>
      )}
    </View>
  );
};

export default MainScreen;
