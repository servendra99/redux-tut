import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colour: "blue",
};

const changeTheme = createSlice({
  name: "theme",
  initialState,

  reducers: {
    toggletheme: (state) => {
      if (state.colour == "red") state.colour = "blue";
      else state.colour = "red";
    },
  },
});
export const { toggletheme } = changeTheme.actions;
export default changeTheme.reducer;
