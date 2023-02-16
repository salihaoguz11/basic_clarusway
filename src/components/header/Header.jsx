import "./Header.css";
import logo from "../../assets/photo2.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
