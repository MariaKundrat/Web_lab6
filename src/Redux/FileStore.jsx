import { configureStore } from "@reduxjs/toolkit";
import smartphonesReducer from "../Redux/Reducers/SmartphoneSlice";

const store = configureStore({
    reducer: {
        smartphone: smartphonesReducer,
    },
});

export default store;
