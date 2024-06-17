import { configureStore } from "@reduxjs/toolkit";
import BirthdayReducer from "../reducers/BirthdayReducer"

const store  = configureStore ({
    reducer : {
        birthday: BirthdayReducer
    }
})

export default store 