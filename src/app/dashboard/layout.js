"use client";
import Link from "next/link";
import {
  AiFillWechat,
  AiOutlineClose,
  AiOutlineFileText,
} from "react-icons/ai";
import { HiOutlineBookOpen, HiOutlineLogout } from "react-icons/hi";

import NavLink from "@/Components/Common/NavLink/NavLink";

import useAuth from "@/Components/hooks/useAuth";
import useUserinfo from "@/Components/hooks/useUserinfo/useUserinfo";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";
import {
  FaBars,
  FaCalendarCheck,
  FaStar,
  FaUserInjured
} from "react-icons/fa";
import { AuthContext } from "../(with-navbar)/context/AuthContext";


const Dashboard = ({ children }) => {
  const {data}  = useUserinfo();
  const roleUser = data?.result
  console.log(roleUser);
  const{logout}=useAuth()
  const [open, setOpen] = useState(false);
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div className="w-full h-[100vh] flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>;
  }
  if (!user) {
    redirect("/login");
  } else {
    return (
      <div>
        <div className="flex justify-between">
          <div
            className={`fixed z-20  ${
              open
                ? "left-0 duration-200 md:w-[20%] w-full"
                : "md:left-0 -left-96 duration-200 md:w-[20%] w-0"
            }   `}
          >
            <div className="">
              <div
                className={`bg-white shadow-lg  overflow-scroll h-[100dvh] border-gray-100 border-2 `}
              >
                <AiOutlineClose
                  className={` cursor-pointer z-20 font-bold md:hidden inline-block ml-10
                  mt-10
              text-3xl text-black  duration-150 ${
								open && 'md:-right-3 right-6'
							}`}
									onClick={() => setOpen(!open)}
								></AiOutlineClose>
								<div className="text-center pt-6">
									<img
										src={user?.photoURL}
										alt=""
										className="h-32 w-32 rounded-full mx-auto   border-gray-100 border-8"
									/>
									<h3 className="font-bold my-3">{roleUser?.userName}</h3>
									{roleUser?.userRole==="doctor"?<p>{roleUser?.doctorBio}</p>:""}
								</div>
								<div className="my-8">
									<p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<NavLink className="flex gap-4" href="/">
											<HiOutlineBookOpen className="mt-1 " /> Home
										</NavLink>
									</p>
									
                 {roleUser?.userRole==="doctor"?<div>
                 <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<NavLink
											classlist="flex gap-4"
											href="/dashboard/doctors-peation"
										>
											<FaUserInjured className="mt-1 " /> My Patients
										</NavLink>
									</p>
                  <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<Link className="flex gap-4" href="">
											<AiFillWechat className="mt-1 text-xl" />
											Chat
										</Link>
									</p>
									
                 </div>:""}
									{roleUser?.userRole==="admin"?<p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<NavLink classlist="flex gap-4" href="/dashboard/all-users">
											<FaUserInjured className="mt-1 " /> All Users
										</NavLink>
									</p>:""}

									
									
                  {roleUser?.userRole==="user"?<div>
                  <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<NavLink
											classlist="flex gap-4"
											href="/dashboard/doctor_appointment"
										>
											<FaCalendarCheck className="mt-1 " /> Appointments
										</NavLink>
									</p>
                  <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<Link className="flex gap-4" href="">
											<AiFillWechat className="mt-1 text-xl" />
											Chat
										</Link>
									</p>
                  <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<Link className="flex gap-4" href="">
											<AiOutlineFileText className="mt-1 " />
											Invoices
										</Link>
									</p>
									<p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<Link className="flex gap-4" href="/dashboard/review">
											<FaStar className="mt-1 " /> Reviews
										</Link>
									</p>
                  </div>:""}

									{/* <p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<Link className="flex gap-4" href="">
											<FaShareAlt className="mt-1 " />
											Social Media
										</Link>
									</p> */}

									<p className="border-t-2 border-gray-200 p-4 hover:text-red-500 text-sm">
										<button className="flex gap-4" onClick={()=>logout()}>
											<HiOutlineLogout className="mt-1" /> Logout
										</button>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div>
						<div
							className={`absolute   ${
								// open
								// ? "left-[300px] md:w-[calc(100%-300px)] w-0 "
								// : "md:left-[100px] md:w-[calc(100%-100px)] w-full duration-300"
								' md:left-[20%] md:w-[calc(100%-20%)] w-full '
							} overflow-hidden md:duration-300 `}
						>
							<div>
								<div className="flex justify-between items-center md:p-10 p-10">
									<FaBars
										className={` cursor-pointer  md:hidden inline-block
              text-3xl text-black  duration-150 ${
								open && 'rotate-180 md:-right-3 right-6'
							}`}
										onClick={() => setOpen(!open)}
									></FaBars>
								</div>
							</div>
							{children}
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Dashboard;
