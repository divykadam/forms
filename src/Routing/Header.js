import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <nav>
        <button
          className="header_link"
          onClick={() => {
            navigate("/formC");
          }}
        >
          Class (Form)
        </button>
        <button
          className="header_link"
          onClick={() => {
            navigate("/form");
          }}
        >
          Function (Form)
        </button>
      </nav>
    </div>
  );
};
export default Header;
