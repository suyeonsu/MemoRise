// 스토어
import { configureStore } from "@reduxjs/toolkit";

//리듀서
import userReducer from "./user";

export const store = configureStore({
  // reduce는 Redux가 사용하는 데이터와
  // 데어터를 변경하는 동작의 상태(state)를 나타내는 슬라이스로 구성
  reducer: {
    userInfo: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
