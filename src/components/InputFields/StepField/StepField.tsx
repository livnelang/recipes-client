import "./StepField.css";
import DragIconImg from "../../../assets/images/drag_icon.svg";
import TextArea from "../TextArea/TextArea";
import CameraImg from "../../../assets/images/camera.svg";

interface StepFieldProps {
  stepNumber: number;
}

const StepField = (props: StepFieldProps) => {
  return (
    <div className="StepField">
      <div className="numberIndicator">
        <span className="stepNumber">{props.stepNumber}</span>
        <img src={DragIconImg} alt="" />
      </div>
      <div className="stepContent">
        <TextArea name="step" placeholder="Whats next" />
        <div className="stepPicture">
          <img src={CameraImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StepField;
