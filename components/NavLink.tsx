import React from "react";
import { Link } from "react-scroll";

type Props = {
  title: string;
  onClick?: () => void;
};

const NavLink = ({ title, onClick }: Props) => {
  return (
    <Link
      offset={-100}
      spy
      smooth
      to={title}
      onClick={onClick}
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );
};

export default NavLink;
