// import SearchBar from "../SearchBar/SearchBar";
import CirclesImg from "../../assets/images/circles_logo_overlay.svg";
import "./Header.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import Seperator from "../Seperator/Seperator";
const Header = () => {
  const history = useHistory();
  const [shouldShowBackArrow, setShouldShowBackArrow] = useState<boolean>(true);

  const handleLogoClick = () => {
    history.push("/main/list");
  };

  useEffect(() => {
    if (history.location.pathname.includes("onboarding")) {
      setShouldShowBackArrow(false);
    }
  }, [history.location, shouldShowBackArrow]);

  return (
    <div className="Header">
      <div className="content">
        <h4 className="title" onClick={handleLogoClick}>
          Recipes
        </h4>
      </div>
      <img src={CirclesImg} alt="" />
      <Seperator></Seperator>
    </div>
  );
};

export default Header;
