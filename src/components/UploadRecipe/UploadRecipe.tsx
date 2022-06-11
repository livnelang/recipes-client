import AbsoluteSkeleton from "../AbsoluteSkeleton/AbsoluteSkeleton";
import "./UploadRecipe.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import UploadRecipeStageActions from "./UploadRecipeStageActions/UploadRecipeStageActions";
import UploadRecipeDetails from "./UploadRecipeDetails/UploadRecipeDetails";
import { ExtendedRecipe, Recipe, Step } from "../RecipeCard/Recipe";
import UploadRecipeSteps from "./UploadRecipeSteps/UploadRecipeSteps";
import CustomPopup from "../CustomPopup/CustomPopup";
import APIService from "../../services/API";
import AppOverlaySpinner from "../AppOverlaySpinner/AppOverlaySpinner";
import { useDispatch } from "react-redux";
import { addRecipe } from "../../store/slices/recipesSlice";

export interface UploadRecipeDetailsForm {
  coverPhoto: string;
  name: string;
  description: string;
  preperationLength: number;
}

export interface UploadRecipeStepsForm {
  ingredients: string[];
  steps: Step[];
}

export interface RecipeCreateParams {
  detailsForm: UploadRecipeDetailsForm;
  stepsForm: UploadRecipeStepsForm;
}

interface FormValidationPopup {
  show: boolean;
  title: string;
  message: string;
}

const formValidationPopupInitialState: FormValidationPopup = {
  show: false,
  title: "Submission error",
  message: "",
};

export type UPLOAD_STAGE = 1 | 2;

const UploadRecipeFormsInitialState: RecipeCreateParams = {
  detailsForm: {
    coverPhoto: "",
    name: "",
    description: "",
    preperationLength: 90,
  },
  stepsForm: {
    ingredients: ["", ""],
    steps: [
      {
        text: "",
        images: [],
      },
    ],
  },
};

interface Props {
  api: APIService;
}

const UploadRecipe = (props: Props) => {
  const allSteps = 2;
  const [isSubmittingRecipe, setIsSubmittingRecipe] = useState<boolean>(false);
  const [currentStage, setCurrenStage] = useState<UPLOAD_STAGE>(1);
  const [recipeForms, setRecipeForms] = useState<RecipeCreateParams>(
    UploadRecipeFormsInitialState
  );
  const [validationPopup, setValidationPopup] = useState<FormValidationPopup>(
    formValidationPopupInitialState
  );
  const history = useHistory();
  const dispatch = useDispatch();

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

  const handleClickAddIngredient = () => {
    setRecipeForms({
      detailsForm: recipeForms.detailsForm,
      stepsForm: {
        ...recipeForms.stepsForm,
        ingredients: [...recipeForms.stepsForm.ingredients, ""],
      },
    });
  };

  const handleClickAddStep = () => {
    setRecipeForms({
      detailsForm: recipeForms.detailsForm,
      stepsForm: {
        ...recipeForms.stepsForm,
        steps: [...recipeForms.stepsForm.steps, { text: "", images: [] }],
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
            onClickAddIngredient={handleClickAddIngredient}
            onClickAddStep={handleClickAddStep}
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
  };

  const onSuccessRecipeCreate = (createdRecipe: Recipe) => {
    const hours = Math.floor(createdRecipe.preperationLength / 60);
    const minutes = createdRecipe.preperationLength % 60;

    let newExtendedRecipe: ExtendedRecipe = {
      ...createdRecipe,
      preperationText:
        hours > 0 ? `${hours} h, ${minutes} minutes` : `${minutes} minutes`,
    };

    dispatch(addRecipe({ newItem: newExtendedRecipe }));
    history.push(`/main/item/${newExtendedRecipe.id}`);
  };

  const submitRecipe = () => {
    setIsSubmittingRecipe(true);
    props.api
      .createRecipe(recipeForms)
      .then((res) => onSuccessRecipeCreate(res))
      .catch((err) => console.log(err))
      .finally(() => {
        setIsSubmittingRecipe(false);
      });
  };

  const validateForm = (): boolean => {
    if (
      recipeForms.detailsForm.coverPhoto === null ||
      recipeForms.detailsForm.description.length === 0 ||
      recipeForms.detailsForm.name.length === 0 ||
      recipeForms.detailsForm.name === "" ||
      recipeForms.stepsForm.steps.length === 0 ||
      recipeForms.stepsForm.ingredients.length === 0 ||
      recipeForms.detailsForm.coverPhoto === null
    ) {
      setValidationPopup({
        ...validationPopup,
        show: true,
        message: "Please fill all the missing fields",
      });
      return false;
    }
    return true;
  };

  const handleClickSubmitForm = () => {
    if (isSubmittingRecipe) return;

    const isFormValid = validateForm();
    if (isFormValid) {
      submitRecipe();
    }
  };

  useEffect(() => {
    return () => {
      setIsSubmittingRecipe(false);
    };
  }, []);

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
          onClickSubmitForm={handleClickSubmitForm}
        />
      </div>
      <CustomPopup
        title={validationPopup.title}
        message={validationPopup.message}
        show={validationPopup.show}
        onClose={() => setValidationPopup({ ...validationPopup, show: false })}
      ></CustomPopup>
      {isSubmittingRecipe ? (
        <AppOverlaySpinner loadingText="Creating"></AppOverlaySpinner>
      ) : null}
    </AbsoluteSkeleton>
  );
};

export default UploadRecipe;
