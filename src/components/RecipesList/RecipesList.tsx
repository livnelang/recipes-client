import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
// import { useRouteMatch } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { recipesState } from "../../store/store";
import { ExtendedRecipe, Recipes } from "../RecipeCard/Recipe";
import RecipeCard from "../RecipeCard/RecipeCard";
import SearchBar from "../SearchBar/SearchBar";
import "./RecipesList.css";

const RecipesList = () => {
  const URL = "/recipes";
  const [recipes, setRecipes] = useRecoilState(recipesState);
  const items: Recipes | null = useFetch(URL);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const handleSearchBarText = (value: string) => {
    setSearchTerm(value);
  };

  const filterItems = (recipe: ExtendedRecipe) => {
    return searchTerm === null
      ? true
      : recipe.name.toLowerCase().includes(searchTerm);
  };

  useEffect(() => {
    console.log("render!");
    console.log("items: ", items);
    if (items !== null && recipes.length === 0) {
      const extendedRecipes = items.data as ExtendedRecipe[];
      extendedRecipes.forEach((recipe) => {
        const hours = Math.floor(recipe.preperationLength / 60);
        const minutes = recipe.preperationLength % 60;
        recipe.preperationText =
          hours > 0 ? `${hours} h, ${minutes} minutes` : `${minutes} minutes`;
      });
      setRecipes(extendedRecipes);
    }
  }, [items, recipes.length, setRecipes]);

  return (
    <div className="RecipesList">
      <SearchBar handleSearchText={handleSearchBarText}></SearchBar>
      <div className="listContainer">
        {items === null && recipes.length === 0 ? (
          "Loading"
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
