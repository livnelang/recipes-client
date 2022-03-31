import { createContext, FC, ReactNode, useContext, useState } from "react";
import { LoggedUser } from "./store/store";

interface IUserContext {
  loggedUser: LoggedUser | null;
  setLoggedUser: (loggedUser: LoggedUser | null) => void;
  isLoggedUser: () => boolean;
}

const defaultState = {
  loggedUser: null,
  setLoggedUser: () => {},
  isLoggedUser: () => false,
};

const UserContext = createContext<IUserContext>(defaultState);

type Props = {
  children?: ReactNode;
};

const UserProvider: FC = ({ children }: Props) => {
  const [loggedUser, setLoggedUser] = useState<LoggedUser | null>(null);

  const handleLoggedUser = (loggedUser: LoggedUser | null) => {
    if (!loggedUser) {
      localStorage.removeItem("user");
    } else {
      setLoggedUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));
    }
  };

  const isLoggedUser = () => {
    return localStorage.getItem("user") !== null;
  };

  return (
    <UserContext.Provider
      value={{
        loggedUser: loggedUser,
        setLoggedUser: handleLoggedUser,
        isLoggedUser: isLoggedUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useThemeContext = () => useContext(UserContext);
export default UserProvider;
