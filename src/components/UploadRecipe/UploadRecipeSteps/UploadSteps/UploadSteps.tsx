import { FaPlus } from "react-icons/fa";
import StepField from "../../../InputFields/StepField/StepField";
import { Step } from "../../../RecipeCard/Recipe";
import "./UploadSteps.css";

interface UploadStepsProps {
  steps: Step[];
  onClickAddStep: () => void;
  onUpdateStep: (key: number, val: Step) => void;
  onDeleteStep: (index: number) => void;
}

const UploadSteps = (props: UploadStepsProps) => {
  return (
    <div className="UploadSteps section groupInput">
      <h3 className="title">Steps</h3>
      <div className="stepsContainer">
        {props.steps.map((step, key) => {
          return (
            <StepField
              stepNumber={key}
              step={step}
              key={key}
              onChange={(updatedStep: Step) =>
                props.onUpdateStep(key, updatedStep)
              }
              onDelete={(index) => props.onDeleteStep(index)}
            ></StepField>
          );
        })}
      </div>
      <div className="stepsActions">
        <div
          className={
            "AppButton transparent addItemBtn " +
            (props.steps.length > 0 ? "shrinked" : "")
          }
          onClick={props.onClickAddStep}
        >
          <FaPlus /> <span className="btnText">Step</span>
        </div>
      </div>
    </div>
  );
};

export default UploadSteps;
