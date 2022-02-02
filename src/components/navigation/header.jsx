import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="nav-container">
      <ul className="nav-items">
        <Link to="#" className="link">
          Trips
        </Link>
        <Link to="#" className="link">
          Recently Viewed
        </Link>
        <Link to="#" className="link">
          Bookings
        </Link>
        <div>
          <img
            src="https://picsum.photos/200/300"
            alt="user"
            className="user-img"
          />
        </div>
      </ul>
    </div>
  );
};

export default Header;
