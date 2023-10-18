import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const Appointment = () => {
    return (

        <div className=' mb-20 p-20 mx-auto'>
            <h3 className='text-2xl text-orange-600  font-semibold my-4'>Make an appointment</h3>
            <h1 className='text-3xl text-sky-900  font-semibold'>Get the right Pediatrician book your doctor</h1>
            <div className='mt-10'>
                <form className=''>
                    <div className='flex  gap-6 font-bold '>
                        <div className="form-control w-1/2">

                            <input type="text" name='Your Name' placeholder="Your Name" className="input input-bordered bg-slate-200" />
                        </div>
                        <div className="form-control w-1/2 mb-5">

                            <input type="datetime-local" name='Time & Date' placeholder="Time & Date" className="input input-bordered bg-slate-200" />
                        </div>
                    </div>
                    <div className='flex gap-6 font-bold  '>
                        <div className="form-control w-1/2">


                            <select className='h-12 mt-2 input input-bordered bg-slate-200' name="Select Service" id='sub-category' >

                                <option value="Allergy_testing">Select Service</option>
                                <option value="Allergy_testing">Allergy Testing</option>
                                <option value="Allergy_testing">Allergy Testing</option>
                            </select>

                        </div>
                        <div className="form-control w-1/2">

                            <input type="number" name='Phone Number' placeholder="Phone Number" className="input input-bordered bg-slate-200" />
                        </div>
                    </div>

                    <div className='flex justify-center mt-6'>
                        <button className="btn btn-wide bg-emerald-500 font-bold  text-white hover:bg-emerald-600 ">Make appointment 
                        <FaArrowCircleRight></FaArrowCircleRight>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Appointment;