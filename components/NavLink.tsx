import React from "react";
import { Link } from "react-scroll";

type Props = {
  title: string;
  href: string;
};

const NavLink = ({ title, href }: Props) => {
  return (
    <Link
      to={href}
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </Link>
  );
};

export default NavLink;
