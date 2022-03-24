import TextField from "../TextField/TextField";
import "./Ingredient.css";
import DragIconImg from "../../../assets/images/drag_icon.svg";

const Ingredient = () => {
  return (
    <div className="Ingredient">
      <img src={DragIconImg} alt="" />
      <TextField name="ingredient" placeholder="Enter ingredient"></TextField>
    </div>
  );
};

export default Ingredient;
