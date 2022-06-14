import { useCallback, useEffect, useState } from "react";
import APIService from "../../services/API";
import { useSelector, useDispatch } from "react-redux";
import { ExtendedRecipe, Recipe } from "../RecipeCard/Recipe";
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBar from "../SearchBar/SearchBar";
import "./RecipesList.css";
import { setRecipes } from "../../store/slices/recipesSlice";
import { RootState } from "../../store/rtkStore";
import RecipeListSkeleton from "../Skeletons/RecipeListSkeleton/RecipeListSkeleton";

interface Props {
  api: APIService;
}

const RecipesList = (props: Props) => {
  const { api } = props;

  const recipesfgfg = useSelector((state: RootState) => state);
  console.log(recipesfgfg);

  const recipes: ExtendedRecipe[] = useSelector(
    (state: RootState) => state.recipes.items
  );
  const dispatch = useDispatch();

  const [isLoadingItems, setIsLoadingItems] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleSearchBarText = (value: string) => {
    setSearchTerm(value);
  };

  const filterItems = (recipe: ExtendedRecipe) => {
    return searchTerm === null
      ? true
      : recipe.name.toLowerCase().includes(searchTerm);
  };

  const populateItems = useCallback(
    (recipes: Recipe[]) => {
      const extendedRecipes = recipes as ExtendedRecipe[];
      extendedRecipes.forEach((recipe) => {
        const hours = Math.floor(recipe.preperationLength / 60);
        const minutes = recipe.preperationLength % 60;
        recipe.preperationText =
          hours > 0 ? `${hours} h, ${minutes} minutes` : `${minutes} minutes`;
      });
      dispatch(setRecipes({ items: extendedRecipes }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (recipes.length > 0) {
      return;
    }

    setIsLoadingItems(true);
    setTimeout(() => {
      api
                    .getItems()
        .then((res) => {
          populateItems(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsLoadingItems(false));
    }, 400);
  }, [api, populateItems, recipes.length]);

  return (
    <div className="RecipesList">
      <SearchBar handleSearchText={handleSearchBarText}></SearchBar>
      <div className="listContainer">
        {isLoadingItems ? (
          <RecipeListSkeleton></RecipeListSkeleton>
        ) : (
          <>
            {recipes.filter(filterItems).map((recipe, index) => {
              return <RecipeCard {...recipe} key={index} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipesList;
