export type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: string;
  tags: string[];
  image: string;
  rating: number;
};

export type RecipesResponse = {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
};
