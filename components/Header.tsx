"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import clsx from "clsx";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <Image
            src="/images/xora.svg"
            alt="Xora Logo"
            width={115}
            height={55}
          />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg;bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title={"features"} href="/features" />
                  <div className="dot" />
                  <NavLink title={"pricing"} href="pricing" />
                </li>

                <li className="nav-logo">
                  <Link
                    to={"hero"}
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <Image
                      src={"/images/xora.svg"}
                      alt="Xora Logo"
                      width={160}
                      height={55}
                    />
                  </Link>
                </li>

                <li className="nav-li">
                  <NavLink title={"faq"} href="faq" />
                  <div className="dot" />
                  <NavLink title={"download"} href="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[950px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <Image
                src={"/images/bg-outlines.svg"}
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <Image
                src={"/images/bg-outlines-fill.png"}
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={handleButtonClick}
        >
          <Image
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            width={50}
            height={50}
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
