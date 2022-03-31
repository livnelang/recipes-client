import "./Menu.css";
import { FaHome, FaUpload, FaUserAlt } from "react-icons/fa";
import { ReactElement } from "react";
import { useHistory } from "react-router";

interface NavigationItem {
  name: string;
  path: string;
  icon: ReactElement;
}

const NAV_ITEMS: NavigationItem[] = [
  {
    name: "Home",
    path: "/main/list",
    icon: <FaHome />,
  },
  {
    name: "Upload",
    path: "/upload",
    icon: <FaUpload />,
  },
  {
    name: "About",
    path: "/about",
    icon: <FaUserAlt />,
  },
];
const Menu = () => {
  const history = useHistory();

  const navigateToPath = (path: string) => {
    history.push(path);
  };

  return (
    <div className="Menu">
      {NAV_ITEMS.map((navItem, idx) => {
        return (
          <div
            className={
              "navItem" +
              (history.location.pathname === navItem.path ? " highlighted" : "")
            }
            key={idx}
            onClick={() => navigateToPath(navItem.path)}
          >
            <span>{navItem.icon}</span>
            <span>{navItem.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
