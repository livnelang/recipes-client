import TextField from "../TextField/TextField";
import "./Ingredient.css";
import DragIconImg from "../../../assets/images/drag_icon.svg";
import { FaTrash } from "react-icons/fa";

interface IngredientProps {
  value: string;
  onValueChange: (value: string) => void;
  onDelete: () => void;
}

const Ingredient = (props: IngredientProps) => {
  return (
    <div className="Ingredient">
      <img src={DragIconImg} alt="" />
      <TextField
        value={props.value}
        name="ingredient"
        placeholder="Enter ingredient"
        onChange={(e) => props.onValueChange(e.target.value)}
      ></TextField>
      <span className="trash" onClick={props.onDelete}>
        <FaTrash />
      </span>
    </div>
  );
};

export default Ingredient;
