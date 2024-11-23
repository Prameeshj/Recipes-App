import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./recepieSlice"


const recipeStore = configureStore({
    reducer:{
        recipeReducer : recipeSlice,
    }
})

export default recipeStore