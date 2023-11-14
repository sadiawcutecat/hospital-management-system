'use client';
import useAuth from '@/Components/hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';

const prescription = () => {
    const [prescriptions, setPrescriptions] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`/api/prescription/${user.email}`)
            .then(res => res.json())
            .then(data => setPrescriptions(data.result))

    })

    return (
        <>
            {
                prescriptions?.map(prescription => {
                    return (

                        <div key={prescription._id}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={prescription.doctorPhoto} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{prescription.doctorName}</h2>
                                    
                                    <div className="card-actions">

                                        {/* The button to open modal */}
                                        <label htmlFor={`my-modal-${prescription._id}`} className="btn btn-sm text-emerald-600 bg-emerald-200  hover:bg-emerald-400">
                                            <FaEye className=" h-4 w-4" /> Prescription</label>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id={`my-modal-${prescription._id}`} className="modal-toggle" />
                                        <div className="modal modal-bottom sm:modal-middle ">
                                            <div className="modal-box">
                                                dgfbngv
                                                {/* <Form patient={patient}></Form> */}
                                                <div className="modal-action">
                                                    <label htmlFor={`my-modal-${prescription._id}`} className="btn bg-orange-400 text-white font-bold hover:bg-orange-600">Cancel</label>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    )


                })
            }

        </>
    );
};

export default prescription;