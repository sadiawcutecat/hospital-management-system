
import Link from 'next/link';
import React from 'react';
import { GiHospitalCross } from 'react-icons/gi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { HiMenuAlt3 } from 'react-icons/hi';

import { GiFamilyHouse } from "react-icons/gi"
import { SlInfo } from "react-icons/sl"
import { FaUserDoctor } from "react-icons/fa6"
import {  RxDashboard } from "react-icons/rx"
import {  IoMdLogIn} from "react-icons/io"

const NavLinks= [
    {
        label: "Home",
        path: "/",
        icon: <GiFamilyHouse fontSize={20} />,
    },
    {
        label: "About",
        path: "/about",
        icon:  <SlInfo fontSize={20} />,
    },
    {
        label: "Contact",
        path: "/Contact",
        icon:  <SlInfo fontSize={20} />,
    },
    {
        label: "Doctors",
        path: "/doctors",
        icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
    },
    {
        label: "Dashboard",
        path: "/dashboard",
        icon: <RxDashboard fontSize={20} />,
    },
    {
        label: "Login",
        path: "/login",
        icon: <IoMdLogIn fontSize={20} />,
    },
]

const NavBar = () => {
    return (
        <div className="navbar fixed z-30 bg-opacity-30  bg-black text-white px-10">
  <div className="navbar-start">
    
    <a href='/' className="btn btn-ghost normal-case text-2xl"><GiHospitalCross/> Medic</a>
  </div>
 
  <div className="navbar-center hidden lg:block">
                    <div className="w-[40rem] flex flex-row">
                     <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search Doctors..."
                            className="w-full  input  input-bordered input-sm"
                        />
                        <div className="dropdown dropdown-hover ">
                            <label
                                tabIndex={0}
                                className="w-[8rem] px-1 btn btn-sm btn-outline border-gray-600 rounded-none capitalize"
                            >
                                Category <RiArrowDownSLine />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-1 shadow border border-gray-500 bg-gray-700  rounded-lg w-52"
                            >
                                <li>
                                    <a>Cardiologist</a>
                                </li>
                                <li>
                                    <a>Neurologist</a>
                                </li>
                                <li>
                                    <a>Pathologist</a>
                                </li>
                            </ul>
                        </div>
                        <button className="btn btn-sm btn-secondary  rounded-r-lg capitalize">Search</button>
                    </div>
                </div>

 
  <div className="navbar-end ">
  <div className="dropdown hidden lg:block">
      <label tabIndex={0} className="btn btn-ghost text-4xl ">
        <HiMenuAlt3></HiMenuAlt3>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <div  className='hidden md:block  '>
 <div className='flex flex-col lg:flex-row font-serif gap-7'>{NavLinks.map((nav) => (
                        <Link
                            key={nav.path}
                            href={nav.path}
                            className="flex flex-row lg:flex-col items-center text-white rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
                        >
                            <div className="">
                               
                                {nav.icon}
                            </div>
                            <span className="text-lg">{nav.label}</span>
                        </Link>
                    ))}</div>
 </div>
      </ul>
    </div>
 <div  className='flex flex-col lg:flex-row  font-serif gap-7'>
 {NavLinks.map((nav) => (
                        <Link
                            key={nav.path}
                            href={nav.path}
                            className="flex flex-row lg:flex-col items-center text-white rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
                        >
                            <div className="">
                               
                                {nav.icon}
                            </div>
                            <span className="text-lg">{nav.label}</span>
                        </Link>
                    ))}
 </div>
  </div>
</div>
    );
};

export default NavBar;
