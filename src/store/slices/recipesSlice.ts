import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExtendedRecipe } from "../../components/RecipeCard/Recipe";

export interface RecipesInventoryState {
  items: ExtendedRecipe[];
}

const recipesInventorysInitialState: RecipesInventoryState = {
  items: [],
};

// SLICES
const recipesSlice = createSlice({
  name: "recipes",
  initialState: recipesInventorysInitialState,
  reducers: {
    setRecipes: (
      state,
      { payload }: PayloadAction<{ items: ExtendedRecipe[] }>
    ) => {
      state.items = payload.items;
    },
    addRecipe: (
      state,
      { payload }: PayloadAction<{ newItem: ExtendedRecipe }>
    ) => {
      state.items = [...state.items, payload.newItem];
    },
  },
});

// ACTIONS
export const { setRecipes, addRecipe } = recipesSlice.actions;

// REDUCER
export default recipesSlice;
