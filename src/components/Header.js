import "./Header.css";
import { GoSun } from "react-icons/go";
import { PiMoonStarsFill } from "react-icons/pi";

export default function Header(props) {
  const { theme, setTheme } = props;

  function ToggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <span>Task Management</span>
          </div>
          <div className="theme-container">
            <span>{theme === "light" ? "Light Mode" : "Dark Mode"}</span>
            <span className="icon" onClick={ToggleTheme}>
              {theme === "light" ? <GoSun /> : <PiMoonStarsFill />}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

