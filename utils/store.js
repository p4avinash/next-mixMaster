import { configureStore } from "@reduxjs/toolkit"
import cocktailSlice from "./slices/cocktailSlice"

const store = configureStore({
  reducer: {
    cocktails: cocktailSlice,
  },
})

export default store
