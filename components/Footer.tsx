"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Social {
  id: string;
  title: string;
  icon: string;
  url: string;
}

const socials: Social[] = [
  {
    id: "0",
    title: "x",
    icon: "/images/socials/x.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Threads",
    icon: "/images/socials/threads.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    icon: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Discord",
    icon: "/images/socials/discord.svg",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">Copyright, Nic Last</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="text-p5 transition-all duration-500 hover:text-p1">
              Terms of Service
            </p>
          </div>

          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <Link href={url} className="social-icon">
                  <Image
                    src={icon}
                    alt={title}
                    width={24}
                    height={24}
                    className="size-1/3 object-contain"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
