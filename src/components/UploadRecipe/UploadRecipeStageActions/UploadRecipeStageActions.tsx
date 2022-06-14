import AppButton from "../../AppButton/AppButton";
import { UPLOAD_STAGE } from "../UploadRecipe";
import "./UploadRecipeStageActions.css";

interface UploadRecipeStageProps {
  stage: number;
  onStageUpdate: (stage: UPLOAD_STAGE) => void;
  onClickSubmitForm: () => void;
}

const UploadRecipeStageActions = (props: UploadRecipeStageProps) => {
  const renderButtons = () => {
    switch (props.stage) {
      case 1: {
        return (
          <div className="actionsContainer">
            <AppButton
              text="Next"
              onClick={() => props.onStageUpdate(2)}
            ></AppButton>
          </div>
        );
      }

      case 2: {
        return (
          <div className="actionsContainer multiple">
            <AppButton
              text="Back"
              variant="grey"
              onClick={() => props.onStageUpdate(1)}
            ></AppButton>
            <AppButton
              text="Submit"
              onClick={props.onClickSubmitForm}
            ></AppButton>
          </div>
        );
      }
      default:
        break;
    }
  };

  return <div className="UploadRecipeStageActions">{renderButtons()}</div>;
};

export default UploadRecipeStageActions;
