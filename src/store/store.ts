import { atom, selector } from "recoil";
import { ExtendedRecipe } from "../components/RecipeCard/Recipe";

export interface LoggedUser {
    name: string;
    lastName: string;
}

export const loginState = atom<LoggedUser | null>({
    key: "loginState",
    default: null, 
});

export const recipesState = atom<ExtendedRecipe[]>({
    key: "recipesState",
    default: [],
});

export const recipesList = selector<ExtendedRecipe[]>({
    key: 'recipesList',
    get: ({get}) => {
        return get(recipesState)
    }
});

//     get: (id: number) => (get: GetRecoilValue): ExtendedRecipe | undefined => {
//         const recipes = get(recipesState);
//         const a = recipes.find(r => r.id === id);
//         return recipes.find(r => r.id === id);
//         // return get(recipesState).find(r =>)
//       },
// });