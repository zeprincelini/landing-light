import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MenuSvg } from "../../../assets/menu.svg";
import Sidebar from "../sidebar/sidebar";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const openSidebar = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);
  return (
    <>
      <MenuSvg className="menu-header" onClick={() => openSidebar()} />
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
      <Sidebar toggle={toggle} closeSidebar={openSidebar} />
    </>
  );
};

export default Header;
