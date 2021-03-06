import { ChangeEvent } from "react";
import CoverPhotoImg from "../../../assets/images/upload_cover.svg";
import RangeSlider from "../../InputFields/RangeSlider/RangeSlider";
import TextArea from "../../InputFields/TextArea/TextArea";
import TextField from "../../InputFields/TextField/TextField";
import { UploadRecipeDetailsForm } from "../UploadRecipe";
import "./UploadRecipeDetails.css";
import { FaTrashAlt } from "react-icons/fa";

interface UploadRecipeDetailsProps {
  form: UploadRecipeDetailsForm;
  onFieldChange: <P extends keyof UploadRecipeDetailsForm>(
    prop: P,
    value: UploadRecipeDetailsForm[P]
  ) => void;
}

const UploadRecipeDetails = (props: UploadRecipeDetailsProps) => {
  const onFormFieldChange = <P extends keyof UploadRecipeDetailsForm>(
    prop: P,
    value: UploadRecipeDetailsForm[P]
  ) => {
    props.onFieldChange(prop, value);
  };

  const onFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = function () {
        const base64data = reader.result;
        if (base64data !== null) {
          props.onFieldChange("coverPhoto", base64data.toString());
        }
      };
    }
  };

  return (
    <div className="UploadRecipeDetails recipeFormContainer">
      <div className="sectionsContainer">
        <div
          className={
            "section fileInputContainer coverSection " +
            (props.form.coverPhoto === "" ? "" : "selectedImage")
          }
        >
          {props.form.coverPhoto === "" ? (
            <>
              <input
                type="file"
                onChange={onFileInputChange}
                className="fileInput"
              ></input>
              <div>
                <img src={CoverPhotoImg} alt="" />
              </div>
              <div className="description">
                <h2>Add Cover Photo</h2>
                <span>(up to 12 Mb)</span>
              </div>
            </>
          ) : (
            <>
              <img src={props.form.coverPhoto} alt="" className="fileImage" />
              <span
                className="removeSelectedImage"
                onClick={() => onFormFieldChange("coverPhoto", "")}
              >
                <FaTrashAlt />
              </span>
            </>
          )}
        </div>
        <div className="section groupInput">
          <h3 className="title">Food Name</h3>
          <TextField
            value={props.form.name}
            name="food_name"
            placeholder="Enter food name"
            onChange={(e) => onFormFieldChange("name", e.target.value)}
          />
        </div>
        <div className="section groupInput">
          <h3 className="title">Description</h3>
          <TextArea
            value={props.form.description}
            name="food_description"
            placeholder="Tell a little about your food"
            onChange={(e) => onFormFieldChange("description", e.target.value)}
          />
        </div>
        <div className="section groupInput">
          <h3 className="title">
            Cooking Duration
            <span className="durationMinutesText">(in minutes)</span>
          </h3>
          <RangeSlider
            value={props.form.preperationLength}
            onValueChange={(value) =>
              onFormFieldChange("preperationLength", value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default UploadRecipeDetails;
