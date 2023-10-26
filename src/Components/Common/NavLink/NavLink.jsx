"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href, ...props }) => {
  const currentPath = usePathname();
  console.log(href, currentPath, props.classList);
  return (
    <Link
      href={href}
      className={` ${props.classlist} ${
        currentPath == href ? " text-[#0b9795] font-bold" : ""
      }`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
