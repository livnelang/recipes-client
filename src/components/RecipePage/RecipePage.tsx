import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { recipesList } from "../../store/store";
import { ExtendedRecipe } from "../RecipeCard/Recipe";
import "./RecipePage.css";
import RecipeCircleImg from "../../assets/images/recipe_circle.svg";
import RecipeStep from "./RecipeStep/RecipeStep";
import AbsoluteSkeleton from "../AbsoluteSkeleton/AbsoluteSkeleton";

type RecipeParams = {
  id: string;
};

const RecipePage = () => {
  const history = useHistory();

  let { id } = useParams<RecipeParams>();

  const recipes = useRecoilValue(recipesList);
  const recipe: ExtendedRecipe | undefined = recipes.find((r) => r.id === id);

  useEffect(() => {
    if (recipes.length === 0) {
      history.push(`/main`);
    }
  }, [history, recipes.length]);

  if (recipe === undefined) {
    return <div>Cant find item</div>;
  } else
    return (
      <AbsoluteSkeleton>
        <div className="RecipePage">
          {
            <>
              <div className="recipeTopCover">
                <img src={recipe.icon} alt="" />
              </div>
              <div className="content">
                <div className="recipeHeader section">
                  <h2>{recipe.name}</h2>
                  <div className="shortDescription">
                    {recipe.category} &bull; {recipe.preperationText}
                  </div>
                </div>
                <div className="description section">
                  <h2>Description</h2>
                  <p>{recipe.description}</p>
                </div>
                <div className="ingredients section">
                  <h2>Ingredients</h2>
                  <div className="ingredients-container">
                    {recipe.ingredients.map((ingredient, key) => {
                      return (
                        <div className="ingredient" key={key}>
                          <img src={RecipeCircleImg} alt="" />
                          <span>{ingredient}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="steps section">
                  <h2>Steps</h2>
                  {recipe.steps.map((step, key) => {
                    return (
                      <RecipeStep
                        key={key}
                        number={key + 1}
                        step={step}
                      ></RecipeStep>
                    );
                  })}
                </div>
              </div>
            </>
          }
        </div>
      </AbsoluteSkeleton>
    );
};

export default RecipePage;
