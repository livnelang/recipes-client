import { Step } from "../../RecipeCard/Recipe";
import "./RecipeStep.css";
export interface RecipeStepProps {
  number: number;
  step: Step;
}

const RecipeStep = (props: RecipeStepProps) => {
  const { number, step } = props;
  return (
    <div className="RecipeStep">
      <div className="stepNumber">{number}</div>
      <div className="stepContent">
        <div className="stepText">{step.text}</div>
        {step.images !== undefined && step.images.length > 0 ? (
          <div className="stepImages">
            {step.images.map((imageUrl, idx) => {
              return <img src={imageUrl} key={idx} alt="" />;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecipeStep;
