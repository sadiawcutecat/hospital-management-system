"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import NavLink from "../Common/NavLink/NavLink";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import useAuth from "../hooks/useAuth";
import useUserinfo from "../hooks/useUserinfo/useUserinfo";

const NavLinks = [
  {
    label: "Home",
    path: "/",
    // icon: <GiFamilyHouse fontSize={20} />,
  },
  {
    label: "About",
    path: "/about",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "Contact",
    path: "/contact",
    // icon: <SlInfo fontSize={20} />,
  },
  {
    label: "Doctors",
    path: "/doctors",
    // icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
  },
  {
    label: "Gallery",
    path: "/gallery",
    // icon: <RxDashboard fontSize={20} />,
  },
];

const Navbar = () => {
  const { user, logout } = useAuth();
  const { data } = useUserinfo();
  const roleUser = data?.result;

  const [open, setOpen] = useState(false);
  // const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme");
  //   setTheme(storedTheme || "light");
  //   document.documentElement.setAttribute("data-theme", storedTheme || "light");
  // }, []);

  // const toggleTheme = () => {
  //   const newTheme = theme === "light" ? "dark" : "light";
  //   setTheme(newTheme);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.setAttribute("data-theme", newTheme);
  // };
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  // const handleToggle=(e)=>{
  //   console.log(e)
  //   if(e.target.checked){
  //     setTheme("dark")
  //   }
  //   else{
  //     setTheme("light")
  //   }
  // }
  return (
    <div
      className={`px-3 md:py-4 py-2 fixed z-10 top-0 left-0 w-full bg-black/20 text-white duration-400`}
      id="nav-bg"
      // style={{
      //   background: theme === 'dark' ? '#13005A' : 'rgba(0, 0, 0, 0.2)',
      //   color: theme === 'dark' ? '#fff' : '#000',
      // }}
    >
      <nav className="flex justify-between items-center">
        <div className="font-bold z-20 duration-200 menu-bars  md:hidden inline-block">
          {open ? (
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="font-bold text-2xl"
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setOpen(!open)}
              className="font-bold text-2xl"
            ></AiOutlineMenuUnfold>
          )}
        </div>
        <div>
          <h1 className="text-2xl  lg:text-4xl  font-bold flex items-center ">
            <img
              src="https://i.ibb.co/NpptRzh/download-removebg-preview.png"
              alt=""
              className="h-10 w-10"
            />
            <Link href="/">HealthCare</Link>
          </h1>
        </div>
        <ul
          className={` md:static absolute md:bg-transparent bg-[#2192FF] md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-300 ${
            open ? "left-0 top-0 " : "left-[-500rem] top-0"
          } `}
        >
          {NavLinks.map(({ label, path }) => {
            return (
              <li
                key={path}
                onClick={() => setOpen(false)}
                className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10"
              >
                <NavLink
                  // className={` ${
                  //   currentPath === path ? " text-[#0b9795] font-bold" : ""
                  // }`}
                  // activeClassName="text-blue-500"
                  href={path}
                  // className="text-xl "
                >
                  {label}
                </NavLink>
              </li>
            );
          })}
          <PrivetRoute>
            {user ? (
              <li className="mr-4 md:hover:text-[#0b9795] hover:text-black navBar-list md:mt-0 mt-10">
                <NavLink
                  // className={` ${
                  //   currentPath === path ? " text-[#0b9795] font-bold" : ""
                  // }`}
                  // activeClassName="text-blue-500"
                  href={`/dashboard/${
                    roleUser?.userRole === "admin"
                      ? "all-users"
                      : roleUser?.userRole === "doctor"
                      ? "doctors-peation"
                      : "doctor_appointment"
                  }`}
                  // className="text-xl "
                >
                  Dashboard
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </PrivetRoute>
        </ul>
        {user ? (
          <>
            <div className="flex items-center gap-4">
              {/* <button className="text-2xl" onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button> */}
              <div className="dropdown dropdown-end z-50">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="rounded-full w-10 h-10"
                      title={user.displayName}
                      src={user?.photoURL}
                      alt="User Photo"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 z-50"
                >
                  <li onClick={handleLogOut} className="text-black">
                    <button>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            {/* <button className="text-2xl"  onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button> */}
            <Link href="/login" className="btn btn-success z-[100]">
              <button className="z-50">Login</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
