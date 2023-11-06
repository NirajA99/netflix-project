import { configureStore } from "@reduxjs/toolkit";
import  tvReducer from "../features/Tv/tvSlice";
import movieReducers from "../features/Movies/movieSlice";
import upcomingReducers from "../features/Movies/upcomingSlice";
import commonReducers from '../features/Common/commonSlice';
export const store = configureStore({
     reducer: {
        tv : tvReducer,
        movie : movieReducers,
        common : commonReducers
      //   upcoming : upcomingReducers,
     }
})