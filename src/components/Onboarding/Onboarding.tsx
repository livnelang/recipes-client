import UndrawBurgerImg from "../../assets/images/undraw_hamburger.svg";
import "./Onboarding.css";
import AppButton from "../AppButton/AppButton";
import { useHistory } from "react-router-dom";
import { LoggedUser, setUser } from "../../store/slices/authenticationSlice";
import { useDispatch } from "react-redux";

const Onboarding = () => {
  const disptach = useDispatch();
  const history = useHistory();

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
            // localStorage.setItem("token", JSON.stringify("asdsad"));
            const mockUser: LoggedUser = {
              name: "asd",
              lastName: "sfgfg",
              token: "kj23h42j3k4hkjh",
            };

            disptach(setUser({ loggedUser: mockUser }));
            // setLoggedUser(mockUser);

            history.push("/main/list");
          }}
        />
      </div>
    </div>
  );
};

export default Onboarding;
