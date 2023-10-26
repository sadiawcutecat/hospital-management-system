import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';

const Payment = () => {
    return (
        <div className='mt-[90px] my-10'>
            <form action="" className='px-4'>
                <div className=' flex flex-col lg:flex-row justify-center  gap-3'>
                    <div className='p-9 lg:pr-[300px] shadow-xl'>
                        <h2 className='text-xl '>Personal Information</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-3 '>
                            <input className='border-2 px-2 w-full' type="text" placeholder='Name' />
                            <input className='border-2 px-2  w-full' type="text" placeholder='Name' />
                            <input className='border-2 px-2  w-full' type="text" placeholder='Name' />
                            <input className='border-2 px-2  w-full' type="text" placeholder='Name' />
                        </div>
                        <p>Existing customer? <a className='underline text-red-400' href="/login">Please here login</a> </p>

                        <div className='mt-5 space-y-5'>
                            <h3>Payment Method</h3>
                            <p className='flex items-center gap-3'><input type="radio" name="radio-4" className="radio radio-error" checked />
                                Credit Card</p>
                            <div className='space-y-5'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-3 '>
                            <input className='border-2 px-2' type="text" placeholder='Name on Card' />
                            <input className='border-2 px-2 ' type="text" placeholder='Card Number' />
                            
                            <input className='border-2 px-2 ' type="text" placeholder='Expiry Month' />
                            <input className='border-2 px-2 ' type="text" placeholder='Expiry Year' />
                          
                        </div>
                        <p className='flex items-center gap-3'><input type="radio" name="radio-4" className="radio radio-error" />
                                Paypal</p>
                                <p className='flex items-center gap-3'><input type="square" name="radio-4" className="radio radio-error" />
                                I have read and accept <span className='text-red-500'>terms and conditions</span> </p>
                                <button className='bg-red-600 btn text-white'>Confirm Payment</button>
                            </div>
                        </div>
                    </div>
                    <div className='p-9 h-[450px] shadow-xl '>
                        <h2>Booking Summary</h2>
                        <div className="grid h-1 flex-grow card bg-base-300 rounded-box place-items-center"></div>
                        <div >
                            <div className='flex flex-row gap-3'>
                                <img className='h-[100px]' src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1698045652/a2775105-9593-4562-9b9b-b361f86a90ed_yvsgat.webp" alt="" />
                                <div>
                                    <h3>Dr. Ruby perrin</h3>
                                    <p>***5</p>
                                    <p className='flex items-center'><FaLocationArrow /> Florida , USA </p>
                                </div>
                            </div>
                            <div>
                                <p>Date:</p>
                                <p>Time: </p>
                                <p>Consulting fee:</p>
                                <p>Booking Fee: </p>
                                <p>Video Call: </p>
                                <div className="grid h-1 flex-grow card bg-base-300 rounded-box place-items-center"></div>
                                <p>Total: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;