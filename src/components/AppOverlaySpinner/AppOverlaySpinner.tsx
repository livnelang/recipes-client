import "./AppOverlaySpinner.css";
interface Props {
  loadingText: string;
}

const AppOverlaySpinner = (props: Props) => {
  return (
    <div className="AppOverlaySpinner">
      <div className="content">
        <div className="circle"></div>
        <span className="text">{props.loadingText} ...</span>
      </div>
    </div>
  );
};

export default AppOverlaySpinner;
