import "./StepField.css";
import DragIconImg from "../../../assets/images/drag_icon.svg";
import TextArea from "../TextArea/TextArea";
import CameraImg from "../../../assets/images/camera.svg";
import { Step } from "../../RecipeCard/Recipe";
import { FaTrashAlt } from "react-icons/fa";
import { ChangeEvent } from "react";

interface StepFieldProps {
  stepNumber: number;
  step: Step;
  onChange: (step: Step) => void;
  onDelete: (stepIndex: number) => void;
}

const StepField = (props: StepFieldProps) => {
  const handleStepChange = <P extends keyof Step>(prop: P, value: Step[P]) => {
    props.onChange({
      ...props.step,
      [prop]: value,
    });
  };

  const addEncodedImage = (encodedImage: string) => {
    const images = props.step.images ?? [];
    handleStepChange("images", [...images, encodedImage]);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = function () {
        const base64data = reader.result;
        if (base64data !== null) {
          addEncodedImage(base64data.toString());
        }
      };
    }
  };

  const handleDeleteStepImage = (imageIndex: number) => {
    const images = props.step.images ?? [];
    images.splice(imageIndex, 1);
    handleStepChange("images", images);
  };

  return (
    <div className="StepField">
      <div className="numberIndicator">
        <span className="stepNumber">{props.stepNumber + 1}</span>
        <img src={DragIconImg} alt="" />
      </div>
      <div className="stepContent">
        <TextArea
          value={props.step.text}
          name="step"
          placeholder="Whats next"
          onChange={(e) => handleStepChange("text", e.target.value)}
        />
        <div className="picturesContainer">
          <div className="stepPicture">
            {props.step.images?.map((image, index) => {
              return (
                <div key={index} className="imageContainer">
                  <img src={image} alt="" className="fileImage" />
                  <span
                    className="removeSelectedImage"
                    onClick={() => handleDeleteStepImage(index)}
                  >
                    <FaTrashAlt />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="stepActions">
          <div className="fileInputContainer">
            <input
              type="file"
              value=""
              onChange={onFileInputChange}
              className="fileInput"
            ></input>
            <img src={CameraImg} alt="" />
          </div>
          <span
            className="removeSelectedImage"
            onClick={() => props.onDelete(props.stepNumber)}
          >
            <FaTrashAlt />
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepField;
