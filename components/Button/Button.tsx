import clsx from "clsx";
import React from "react";
import InnerButton from "./InnerButton";
import Link from "next/link";

type Props = {
  icon: string;
  children: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
};

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: Props) => {
  return href ? (
    <Link
      href={href}
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
    >
      <InnerButton icon={icon} markerFill={markerFill}>
        {children}
      </InnerButton>
    </Link>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <InnerButton icon={icon} markerFill={markerFill}>
        {children}
      </InnerButton>
    </button>
  );
};

export default Button;
