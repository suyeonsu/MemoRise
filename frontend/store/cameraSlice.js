import { createSlice } from "@reduxjs/toolkit";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    isCameraActive: true,
  },
  reducers: {
    setCameraActive: (state, action) => {
      state.isCameraActive = action.payload;
    },
  },
});

// 액션 생성자를 자동으로 export
export const { setCameraActive } = cameraSlice.actions;

// 리듀서를 default로 export
export default cameraSlice.reducer;
