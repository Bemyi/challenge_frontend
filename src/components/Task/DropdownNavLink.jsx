import { useState } from "react";
import { NavLink } from "react-router-dom";

const DropdownNavLink = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavLink
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        style={{ color: "white", fontSize: "20px" }}
        onClick={() => handleItemClick()}
      >
        {props.title}
      </NavLink>
      {isOpen && (
        <div>
          {props.subtitles?.map((link, index) => (
            <NavLink
              style={{
                display: "block",
                color: "white",
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownNavLink;
