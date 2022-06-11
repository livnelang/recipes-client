export type RecipeCategory = "Food" | "Drink" | "Deserts";

export interface Recipe {
    id: string;
    name: string;
    category: RecipeCategory;
    icon: string;
    preperationLength: number;
    description: string;
    ingredients: string[];
    steps: Step[];
}

export interface Step {
    text: string;
    images: string[];
}

export interface ExtendedRecipe extends Recipe {
    preperationText: string;
}

export interface Recipes {
    data: Recipe[];
}
