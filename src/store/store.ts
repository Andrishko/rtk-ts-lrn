import { configureStore } from "@reduxjs/toolkit";
import PersonSlice from "./features/PersonSlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        person: PersonSlice
    }
})

export const useAppDispatch: ()=> typeof store.dispatch = useDispatch
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector