import React, { useState } from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import { BlurView } from "@react-native-community/blur";
import LinearGradient from "react-native-linear-gradient";

import MainHeader from "../../components/Header/MainHeader";
import { styles } from "./MainStyle";
import { TextInput } from "react-native-gesture-handler";
import { calculateDynamicWidth } from "../../constants/dynamicSize";
import Colors from "../../constants/colors";

const MainScreen = () => {
  // 공개 범위 설정
  // 0: 전체공개, 1: 일부공개, 2: 비공개
  const [openState, setOpenState] = useState(0);
  const [isToggleOpen, setToggleOpen] = useState(false);

  const selectOpenState = () => {
    setToggleOpen(!isToggleOpen);
  };

  const chooseOpenState = (state: number) => {
    setOpenState(state);
    setToggleOpen(false);
  };

  // 메모 작성 모달
  const [isMemoCreateModalVisible, setMemoCreateModalVisible] = useState(false);

  const closeMemoCreateModal = () => {
    setMemoCreateModalVisible(false);
  };

  const openMemoCreateModal = () => {
    setMemoBtnModalVisible(false);
    setMemoCreateModalVisible(true);
  };

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

  const openMemoBtnModal = () => {
    setMemoBtnModalVisible(true);
    setMemoCreateModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {!isNotificationModalVisible && (
        <View style={styles.headerContainer}>
          <MainHeader openModal={() => setNotificationModalVisible(true)} />
        </View>
      )}
      <View style={styles.rootContainer}>
        <Pressable style={styles.btnContainer} onPress={openMemoBtnModal}>
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
            zIndex: 2,
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
                <Pressable onPress={openMemoCreateModal}>
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

      {/* 메모 작성 모달 */}
      {isMemoCreateModalVisible && (
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
            visible={isMemoCreateModalVisible}
            onRequestClose={closeMemoCreateModal}
          >
            <Pressable
              style={{ flex: 1, backgroundColor: "transparent" }}
              onPress={closeMemoCreateModal}
            />
            <View style={styles.memoContainer}>
              <LinearGradient
                colors={["#FFFFFF", "#F5F5F5"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={{ flex: 1 }}
              >
                <View style={{ padding: calculateDynamicWidth(15) }}>
                  {/* 공개 범위 설정 버튼 */}
                  <View>
                    {openState === 0 && (
                      <Pressable onPress={selectOpenState}>
                        <Image
                          source={require("../../assets/image/public.png")}
                          style={styles.openState}
                        />
                      </Pressable>
                    )}
                    {openState === 1 && (
                      <Pressable onPress={selectOpenState}>
                        <Image
                          source={require("../../assets/image/restrict.png")}
                          style={styles.openState}
                        />
                      </Pressable>
                    )}
                    {openState === 2 && (
                      <Pressable onPress={selectOpenState}>
                        <Image
                          source={require("../../assets/image/closed.png")}
                          style={styles.openState}
                        />
                      </Pressable>
                    )}
                    {isToggleOpen && (
                      <View style={styles.toggleContainer}>
                        <Pressable onPress={() => chooseOpenState(0)}>
                          <View style={styles.toggleContentContainer}>
                            <Text style={styles.toggleText}>전체공개</Text>
                            {openState === 0 && (
                              <View style={styles.blueDotContainer}>
                                <View style={styles.blueDot}></View>
                              </View>
                            )}
                          </View>
                        </Pressable>
                        <Pressable onPress={() => chooseOpenState(1)}>
                          <View style={styles.toggleContentContainer}>
                            <Text style={styles.toggleText}>일부공개</Text>
                            {openState === 1 && (
                              <View style={styles.blueDotContainer}>
                                <View style={styles.blueDot}></View>
                              </View>
                            )}
                          </View>
                        </Pressable>
                        <Pressable onPress={() => chooseOpenState(2)}>
                          <View
                            style={[
                              styles.toggleContentContainer,
                              { paddingLeft: calculateDynamicWidth(16) },
                            ]}
                          >
                            <Text style={styles.toggleText}>비공개</Text>
                            {openState === 2 && (
                              <View style={styles.blueDotContainer}>
                                <View
                                  style={[
                                    styles.blueDot,
                                    { backgroundColor: Colors.text },
                                  ]}
                                ></View>
                              </View>
                            )}
                          </View>
                        </Pressable>
                      </View>
                    )}

                    {/* 임시 더미 데이터 */}
                    <Text>오늘 2023. 09. 04.</Text>
                  </View>
                  <TextInput />
                </View>
              </LinearGradient>
            </View>
          </Modal>
        </BlurView>
      )}
    </View>
  );
};

export default MainScreen;
