"use client";




import { GrStatusCritical,GrStatusGoodSmall, GrStatusGood  } from "react-icons/gr";
import { ImCancelCircle, ImLocation2 } from "react-icons/im";
import { AiOutlineClockCircle, AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import useAuth from "@/Components/hooks/useAuth";

const doctor_appointment = () => {
 const [appointments , setAppointments] = useState([]);
 const {user}= useAuth();
 useEffect(()=>{
  fetch(`/api/appoinment/${user.email}`)
  .then(res => res.json())
  .then(data => setAppointments(data.result))
 })

 const handleCancel = (id) => {
  // console.log(id);

  fetch(`/api/payment/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ status: 'cancel' }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

  return (
    <div>
      
    
      {appointments?.map((appointment) => {
        return (
          <div key={appointment._id} className="">
            <div className=" flex items-center  shadow-lg p-8 ">
              <img
                src={appointment.doctorPhoto}
                alt=""
                className="mask mask-squircle w-24 h-24 mt-3 object-cover "
              />

              <div className="ms-6">
                <h2 className="font-bold">{appointment.doctor}</h2>
                <p className="flex">
                  <AiOutlineClockCircle className="mt-1 me-2" />
                  {appointment.date}
                </p>
                <p className="flex">
               
                  {  appointment.status === "cancel" ? <GrStatusCritical className="mt-1 me-2"/> : appointment.status === "confirm" ?<GrStatusGood className="mt-1 me-2"/> : <GrStatusGoodSmall className="mt-1 me-2"></GrStatusGoodSmall>
                  }
                  {appointment.status} 
                </p>
        
              </div>
              <div className="flex justify-end items-center  space-x-6 ms-auto">
  
                <button onClick={() => handleCancel(appointment._id)} className="btn btn-sm text-red-600 bg-red-200  hover:bg-red-400 ">
                  <ImCancelCircle className=" h-4 w-4" /> Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default doctor_appointment;
