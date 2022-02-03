import { Link } from "react-router-dom";
import { ReactComponent as CloseSvg } from "../../../assets/close.svg";
import "./sidebar.css";

const Sidebar = ({ toggle, closeSidebar }) => {
  return (
    <div
      className="sidenav-container"
      style={{ transform: toggle ? "translateX(0px)" : "translateX(-600px)" }}
    >
      <div style={{ display: "flex", justifyContent: "right" }}>
        <CloseSvg className="menu-side" onClick={() => closeSidebar()} />
      </div>
      <div className="sidenav-links">
        <div>
          <img
            src="https://picsum.photos/200/300"
            alt="user"
            className="user-img"
          />
        </div>
        <Link to="#" className="side-link">
          Trips
        </Link>
        <Link to="#" className="side-link">
          Recently Viewed
        </Link>
        <Link to="#" className="side-link">
          Bookings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
