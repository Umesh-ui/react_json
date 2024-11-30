import { configureStore } from "@reduxjs/toolkit";
import { streamReducer } from "./reducer/index";

export default configureStore({
  reducer: {
    stream: streamReducer,
  },
});
