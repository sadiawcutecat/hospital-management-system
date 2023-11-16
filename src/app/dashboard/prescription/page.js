'use client';
import useAuth from '@/Components/hooks/useAuth';
import React, { useEffect, useState } from 'react';
// import { FaEye } from 'react-icons/fa';

const prescription = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`/api/prescription/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setPrescriptions(data.result[0])
                // console.log(data.result);
            }
            )

    }, [])
    console.log(prescriptions);

    return (
        <div className='grid  grid-cols-1 gap-6'>
            {
                prescriptions?.map(prescription => {
                    return (
                        <div key={prescription._id} >
                            <div className=" flex w-full justify-center items-center shadow-lg p-8 ">
                                <img
                                    src={prescription.doctorPhoto}
                                    alt=""
                                    className="mask mask-squircle w-24 h-24 mt-3"
                                />

                                <div className="ms-6">
                                    <h2 className="font-bold">{prescription.doctorName}</h2>
                                    
                                    <p> <span className='font-bold'>Date & Time:</span> {prescription.Date_Time}</p>
                                    <p><span className='font-bold'>Type:</span> {prescription.Type}</p>
                                    <p><span className='font-bold'>Purpose:</span> {prescription.Purpose}</p>
                                </div>


                                {/* The button to open modal */}
                                <div className="flex justify-end items-center  space-x-6 ms-auto">
                                    <label htmlFor={`my-modal-${prescription._id}`} className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                                        Prescription</label>

                                    {/* Put this part before </body> tag */}
                                    <input type="checkbox" id={`my-modal-${prescription._id}`} className="modal-toggle" />
                                    <div className="modal modal-bottom sm:modal-middle ">
                                        <div className="modal-box text-center">
                                            <h2 className='font-bold '>{prescription.name}</h2>
                                            <p><span className='font-bold'>Email:</span> {prescription.email}</p>
                                           
                                          
                                            <p>{prescription.Prescription}</p>
                                            {/* <Form patient={patient}></Form> */}
                                            <div className="modal-action">
                                                <label htmlFor={`my-modal-${prescription._id}`} className="btn bg-orange-400 text-white font-bold hover:bg-orange-600">Cancel</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>




                            </div>
                        </div>

                        // <div key={prescription._id}>
                        //     <div className=" card w-96 bg-base-100 shadow-xl">
                        //         <figure className="px-10 pt-10">
                        //             <img src={prescription.doctorPhoto} alt="" className="rounded-xl" />
                        //         </figure>
                        //         <div className="card-body items-center text-center">
                        //             <h2 className="card-title">{prescription.doctorName}</h2>

                        //             <div className="card-actions">

                        //                 {/* The button to open modal */}
                        //                 <label htmlFor={`my-modal-${prescription._id}`} className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                        //                     Prescription</label>

                        //                 {/* Put this part before </body> tag */}
                        //                 <input type="checkbox" id={`my-modal-${prescription._id}`} className="modal-toggle" />
                        //                 <div className="modal modal-bottom sm:modal-middle ">
                        //                     <div className="modal-box">
                        //                        <h2 className='font-bold '>{prescription.name}</h2>
                        //                        <p><span className='font-bold'>Email:</span> {prescription.email}</p>
                        //                        <p> <span className='font-bold'>Date & Time:</span> {prescription.Date_Time}</p>
                        //                        <p><span className='font-bold'>Purpose:</span> {prescription.Purpose}</p>
                        //                        <p><span className='font-bold'>Type:</span> {prescription.Type}</p>
                        //                        <p>{prescription.Prescription}</p>
                        //                         {/* <Form patient={patient}></Form> */}
                        //                         <div className="modal-action">
                        //                             <label htmlFor={`my-modal-${prescription._id}`} className="btn bg-orange-400 text-white font-bold hover:bg-orange-600">Cancel</label>
                        //                         </div>
                        //                     </div>
                        //                 </div>


                        //             </div>
                        //         </div>
                        //     </div>
                        // </div>

                    )


                })
            }

        </div>
    );
};

export default prescription;