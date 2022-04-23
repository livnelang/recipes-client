import AddItemButton from "../../../AddItemButton/AddItemButton";
import Ingredient from "../../../InputFields/Ingredient/Ingredient";
import "./Ingredients.css";

interface IngredientsProps {
  ingredients: string[];
  onClickAddIngredient: () => void;
  onUpdateIngredient: (key: number, val: string) => void;
  onDeleteIngredient: (index: number) => void;
}

const Ingredients = (props: IngredientsProps) => {
  return (
    <div className="Ingredients section groupInput">
      <h3 className="title">Ingredients</h3>
      <div className="ingredientsContainer">
        {props.ingredients.map((ingredient, key) => {
          return (
            <Ingredient
              value={ingredient}
              onValueChange={(e) => props.onUpdateIngredient(key, e)}
              onDelete={() => props.onDeleteIngredient(key)}
              key={key}
            ></Ingredient>
          );
        })}
      </div>
      <AddItemButton
          text="Ingredient"
          onClick={props.onClickAddIngredient}
        />
    </div>
  );
};

export default Ingredients;
