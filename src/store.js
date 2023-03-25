
import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./features/logSlice";
import techsReducer from "./features/techSlice";

 const store= configureStore({
  reducer:{
    logs:logReducer,
    techs:techsReducer
  },
})

export default store