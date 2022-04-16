import { UploadRecipeStepsForm } from "../UploadRecipe";
import Ingredients from "./Ingredients/Ingredients";
import "./UploadRecipeSteps.css";

interface UploadRecipeStepsProps {
  form: UploadRecipeStepsForm;
  onClickAddIngredient: () => void;
  onFieldChange: <P extends keyof UploadRecipeStepsForm>(
    prop: P,
    value: UploadRecipeStepsForm[P]
  ) => void;
}

const UploadRecipeSteps = (props: UploadRecipeStepsProps) => {
  const onFormFieldChange = <P extends keyof UploadRecipeStepsForm>(
    prop: P,
    value: UploadRecipeStepsForm[P]
  ) => {
    props.onFieldChange(prop, value);
  };

  const handleIngredientUpdate = (index: number, value: string) => {
    const arr = [...props.form.ingredients];
    arr[index] = value;
    onFormFieldChange("ingredients", arr);
  };

  const handleDeleteIngredient = (index: number) => {
    let arr = [...props.form.ingredients];
    arr.splice(index, 1);
    onFormFieldChange("ingredients", arr);
  };

  return (
    <div className="recipeFormContainer">
      <div className="sectionsContainer">
        <div className="section groupInput">
          <Ingredients
            onClickAddIngredient={props.onClickAddIngredient}
            ingredients={props.form.ingredients}
            onUpdateingredient={handleIngredientUpdate}
            onDeleteIngredient={handleDeleteIngredient}
          ></Ingredients>
        </div>
      </div>
    </div>
  );
};

export default UploadRecipeSteps;
