import { useHistory } from "react-router-dom";
import { ExtendedRecipe } from "./Recipe";
import "./RecipeCard.css";

const RecipeCard = (props: ExtendedRecipe) => {
  const history = useHistory();
  const handleRecipeClick = () => {
    history.push(`/main/item/${props.id}`);
  };

  return (
    <div className="RecipeCard" onClick={handleRecipeClick}>
      <div className="pictureBox">
        <img src={props.icon} alt="" />
      </div>
      <div className="detailsBox">
        <h2>{props.name}</h2>
        <div className="shortDescription">
          {props.category} &bull; {props.preperationText}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
