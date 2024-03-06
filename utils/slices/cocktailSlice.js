import { createSlice } from "@reduxjs/toolkit"

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    searchText: null,
    cocktails: null,
    singleCocktail: null,
  },
  reducers: {
    setSearchTextToStore: (state, action) => {
      state.searchText = action.payload
    },

    setCocktailsDataToStore: (state, action) => {
      state.cocktails = action.payload
    },

    setSingleCocktailDetailToStore: (state, action) => {
      state.singleCocktail = action.payload
    },
  },
})

export const {
  setSearchTextToStore,
  setCocktailsDataToStore,
  setSingleCocktailDetailToStore,
} = cocktailSlice.actions
export default cocktailSlice.reducer
