import { Recipe } from "../types/Recipes";
import { create } from "zustand";

interface StoreRecipe {
  saveRecipe: Recipe[];
  addSaveRecipe: (recipe: Recipe) => void;
  removeSaveRecipe: (id: string) => void;
}

export const useStoreRecipe = create<StoreRecipe>((set) => ({
  saveRecipe: [],
  addSaveRecipe: (recipe) =>
    set((state) => ({
      saveRecipe: [...state.saveRecipe, recipe],
    })),
  removeSaveRecipe: (id) =>
    set((state) => ({
      saveRecipe: state.saveRecipe.filter((recipe) => recipe.id !== Number(id)),
    })),
}));
