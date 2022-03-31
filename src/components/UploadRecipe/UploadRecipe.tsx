import AbsoluteSkeleton from "../AbsoluteSkeleton/AbsoluteSkeleton";
import "./UploadRecipe.css";
import { useHistory } from "react-router";
import { useState } from "react";
import UploadRecipeStageActions from "./UploadRecipeStageActions/UploadRecipeStageActions";
import UploadRecipeDetails from "./UploadRecipeDetails/UploadRecipeDetails";
import { Step } from "../RecipeCard/Recipe";
import UploadRecipeSteps from "./UploadRecipeSteps/UploadRecipeSteps";

export interface UploadRecipeDetailsForm {
  coverPhoto: string | null;
  name: string;
  description: string;
  preperationLength: number;
}

export interface UploadRecipeStepsForm {
  ingredients: string[];
  steps: Step[];
}

interface UploadRecipeForms {
  detailsForm: UploadRecipeDetailsForm;
  stepsForm: UploadRecipeStepsForm;
}

export type UPLOAD_STAGE = 1 | 2;

const UploadRecipeFormsInitialState: UploadRecipeForms = {
  detailsForm: {
    coverPhoto: null,
    name: "",
    description: "",
    preperationLength: 90,
  },
  stepsForm: {
    ingredients: [],
    steps: [],
  },
};

const UploadRecipe = () => {
  const allSteps = 2;
  const [currentStage, setCurrenStage] = useState<UPLOAD_STAGE>(1);
  const [recipeForms, setRecipeForms] = useState<UploadRecipeForms>(
    UploadRecipeFormsInitialState
  );
  const history = useHistory();

  const handleDetailsFormFieldChange = <
    P extends keyof UploadRecipeDetailsForm
  >(
    prop: P,
    value: UploadRecipeDetailsForm[P]
  ) => {
    setRecipeForms({
      stepsForm: recipeForms.stepsForm,
      detailsForm: {
        ...recipeForms.detailsForm,
        [prop]: value,
      },
    });
  };

  const handleStepsFormFieldChange = <P extends keyof UploadRecipeStepsForm>(
    prop: P,
    value: UploadRecipeStepsForm[P]
  ) => {
    setRecipeForms({
      detailsForm: recipeForms.detailsForm,
      stepsForm: {
        ...recipeForms.stepsForm,
        [prop]: value,
      },
    });
  };

  const renderRecipeStage = () => {
    switch (currentStage) {
      case 1: {
        return (
          <UploadRecipeDetails
            form={recipeForms.detailsForm}
            onFieldChange={handleDetailsFormFieldChange}
          ></UploadRecipeDetails>
        );
      }
      case 2: {
        return (
          <UploadRecipeSteps
            form={recipeForms.stepsForm}
            onFieldChange={handleStepsFormFieldChange}
          ></UploadRecipeSteps>
        );
      }
    }
  };

  const handleCancelClick = () => {
    history.push("/main/list");
  };

  const handleSetStage = (incomingStage: UPLOAD_STAGE) => {
    setCurrenStage(incomingStage);
    console.log("incoming stage: ", incomingStage);
  };

  return (
    <AbsoluteSkeleton>
      <div className="UploadRecipe">
        <div className="section stepsSection">
          <span className="cancelBtn" onClick={handleCancelClick}>
            Cancel
          </span>
          <span className="stepIndicator">
            <span className="currentState">{currentStage + "/"}</span>
            {allSteps}
          </span>
        </div>
        {renderRecipeStage()}
        <UploadRecipeStageActions
          stage={currentStage}
          onStageUpdate={handleSetStage}
        />
      </div>
    </AbsoluteSkeleton>
  );
};

export default UploadRecipe;
