import { Step } from "../../RecipeCard/Recipe";
import { UploadRecipeStepsForm } from "../UploadRecipe";
import Ingredients from "./Ingredients/Ingredients";
import "./UploadRecipeSteps.css";
import UploadSteps from "./UploadSteps/UploadSteps";

interface UploadRecipeStepsProps {
  form: UploadRecipeStepsForm;
  onClickAddIngredient: () => void;
  onClickAddStep: () => void;
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

  const handleStepUpdate = (index: number, value: Step) => {
    const arr = [...props.form.steps];
    arr[index] = value;
    onFormFieldChange("steps", arr);
  };

  const handleDeleteIngredient = (index: number) => {
    let arr = [...props.form.ingredients];
    arr.splice(index, 1);
    onFormFieldChange("ingredients", arr);
  };

  const handleDeleteStep = (index: number) => {
    let arr = [...props.form.steps];
    arr.splice(index, 1);
    onFormFieldChange("steps", arr);
  };

  return (
    <div className="recipeFormContainer">
      <div className="sectionsContainer">
        <Ingredients
          ingredients={props.form.ingredients}
          onClickAddIngredient={props.onClickAddIngredient}
          onUpdateIngredient={handleIngredientUpdate}
          onDeleteIngredient={handleDeleteIngredient}
        ></Ingredients>
        <UploadSteps
          steps={props.form.steps}
          onClickAddStep={props.onClickAddStep}
          onUpdateStep={handleStepUpdate}
          onDeleteStep={handleDeleteStep}
        ></UploadSteps>
      </div>
    </div>
  );
};

export default UploadRecipeSteps;
