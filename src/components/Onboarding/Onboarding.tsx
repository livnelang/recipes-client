import UndrawBurgerImg from "../../assets/images/undraw_hamburger.svg";
import "./Onboarding.css";
import AppButton from "../AppButton/AppButton";
import { useHistory } from "react-router-dom";
import { LoggedUser } from "../../store/store";
import { useThemeContext } from "../../UserContext";
// import AuthService from "../../services/AuthService";

const Onboarding = () => {
  const history = useHistory();
  // const authService = AuthService();
  const { setLoggedUser } = useThemeContext();

  return (
    <div className="Onboarding">
      <div className="ImgContainer">
        <img src={UndrawBurgerImg} alt="" />
      </div>
      <div className="description">
        <h2>Start Cooking</h2>
        <p className="p1">Let’s join our community to cook better food!</p>
      </div>
      <div className="GetStartedContainer">
        <AppButton
          text="Get Started"
          onClick={() => {
            localStorage.setItem("token", JSON.stringify("asdsad"));
            const mockUser: LoggedUser = {
              name: "asd",
              lastName: "sfgfg",
            };

            setLoggedUser(mockUser);

            // authService.setCurrentUser(a);
            history.push("/main/list");
          }}
        />
      </div>
    </div>
  );
};

export default Onboarding;
