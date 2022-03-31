import { UploadRecipeStepsForm } from "../UploadRecipe";

interface UploadRecipeStepsProps {
  form: UploadRecipeStepsForm;
  onFieldChange: <P extends keyof UploadRecipeStepsForm>(
    prop: P,
    value: UploadRecipeStepsForm[P]
  ) => void;
}

const UploadRecipeSteps = (props: UploadRecipeStepsProps) => {
  return <div></div>;
};

export default UploadRecipeSteps;
