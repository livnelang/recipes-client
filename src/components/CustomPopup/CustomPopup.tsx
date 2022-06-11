import "./CustomPopup.css";
interface CustomPopupProps {
  title: string;
  message: string;
  show: boolean;
  onClose: () => void;
}

const CustomPopup = (props: CustomPopupProps) => {
  if (props.show === false) {
    return null;
  }

  return (
    <div className={"CustomPopup " + (props.show ? "show" : "")}>
      <div className={"popup"}>
        <div className="header">
          <h2>{props.title}</h2>
          <span className={"close"} onClick={props.onClose}>
            &times;
          </span>
        </div>
        <div className={"content"}>{props.message}</div>
      </div>
    </div>
  );
};

export default CustomPopup;
