# 김준형 기획 파일

### 2023. 09. 06

**[인공지능 현황 정리]**

```
기존에 사용하던 SiameseNet에서 EfficientNet_b2(tf_efficientnet_b2_ns)로 변경.

스타벅스 텀블러 유사도에서 약 10~20% 차이를 보여줌.

정확도는 SiameseNet과 비슷한 90% 수준을 보여줌.
```

<br>

---

### 2023. 09. 07

```
기존에 사용하던 YOLO v5x 모델을 YOLO v8로 변경

yolov8.py 파일 추가
```

<br>

---

### 2023. 09. 08

```
공백
```

<br>

---

### 2023. 09. 10

```
[Authentication Work]

1. Send Credential( Http request )

2. Backend API ( Validate Credentials & Generate Auth Token )

3. Response with auth token ( The auth token identifies an authenticated user. It is sent along with future Http requests to protected resources. )

4. Auth token ( Stored on the device )
```