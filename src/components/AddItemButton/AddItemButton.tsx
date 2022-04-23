import { FaPlus } from "react-icons/fa";
import "./AddItemButton.css";

interface AddItemButtonProps {
  text: string;
  onClick: () => void;
  extraClasses?: string[];
}

const AddItemButton = (props: AddItemButtonProps) => {
  return (
    <div
      className={
        "AddItemButton AppButton transparent " +
        (props.extraClasses ? props.extraClasses.join() : "")
      }
      onClick={props.onClick}
    >
      <FaPlus /> <span className="btnText">{props.text}</span>
    </div>
  );
};

export default AddItemButton;
