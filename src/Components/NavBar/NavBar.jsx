'use client';
import Link from 'next/link';
import { GiHospitalCross } from 'react-icons/gi';
import { RiArrowDownSLine } from 'react-icons/ri';

import { AuthContext } from '@/app/context/AuthContext';
import { useContext } from 'react';
import { FaUserDoctor } from 'react-icons/fa6';
import { GiFamilyHouse } from 'react-icons/gi';
import { IoMdLogIn } from 'react-icons/io';
import { RxDashboard } from 'react-icons/rx';
import { SlInfo } from 'react-icons/sl';

const NavLinks = [
	{
		label: 'Home',
		path: '/',
		icon: <GiFamilyHouse fontSize={20} />,
	},
	{
		label: 'About',
		path: '/about',
		icon: <SlInfo fontSize={20} />,
	},
	{
		label: 'Contact',
		path: '/Contact',
		icon: <SlInfo fontSize={20} />,
	},
	{
		label: 'Doctors',
		path: '/doctors',
		icon: <FaUserDoctor fontSize={20}></FaUserDoctor>,
	},
	{
		label: 'Dashboard',
		path: '/dashboard',
		icon: <RxDashboard fontSize={20} />,
	},
];

const Navbar = () => {
	const { user } = useContext(AuthContext);
	console.log(user?.displayName);

	return (
		<div className="navbar fixed z-30 bg-opacity-30  bg-black text-white px-2 lg:px-10">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
					>
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/doctor">Doctors</Link>
						<Link href="/Contact">Contact</Link>
						<Link href="/dashboard"> DashBoard</Link>
					</ul>
				</div>

				<Link href="/" className="btn btn-ghost normal-case text-2xl">
					<GiHospitalCross />
					Medic
				</Link>
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
								<Link href="">Cardiologist</Link>
							</li>
							<li>
								<Link href="">Neurologist</Link>
							</li>
							<li>
								<Link href="">Pathologist</Link>
							</li>
						</ul>
					</div>
					<button className="btn btn-sm btn-secondary  rounded-r-lg capitalize">
						Search
					</button>
				</div>
			</div>

			<div className="navbar-end ">
				<div className="  font-serif gap-7 ml-2 hidden lg:flex">
					{NavLinks.map((nav) => (
						<Link
							key={nav.path}
							href={nav.path}
							className="flex flex-row lg:flex-col items-center text-white rounded-lg p-2 min-w-[4rem] gap-1 hover:opacity-80 transition-opacity"
						>
							<div className="">{nav.icon}</div>
							<span className="text-lg">{nav.label}</span>
						</Link>
					))}
				</div>
				<div className="dropdown dropdown-end flex">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full"></div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link href=""></Link>
						</li>
						<li>
							<Link href="">Logout</Link>
						</li>
					</ul>
				</div>{' '}
				:{' '}
				<Link href="/login">
					<button className="btn btn-sm lg:btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">
						<IoMdLogIn fontSize={20} />
						Login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
