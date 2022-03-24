import "./AppButton.css";

export type AppButtonVariant = "primary" | "grey";

export interface AppButtonProps {
  text: string;
  onClick?: () => void;
  variant?: AppButtonVariant;
}

const AppButton = (props: AppButtonProps) => {
  return (
    <div
      className={`AppButton ${props.variant || "primary"}`}
      onClick={props.onClick}
    >
      {props.text}
    </div>
  );
};

export default AppButton;
