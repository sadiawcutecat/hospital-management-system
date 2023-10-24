<<<<<<< HEAD
=======
'use client';
>>>>>>> Sraboni
import { FcFeedback, FcGraduationCap, FcLike } from 'react-icons/fc';
import { GrUserExpert } from 'react-icons/gr';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaHospital, FaRegStar, FaStar } from 'react-icons/fa';
import { PiCurrencyDollarFill } from 'react-icons/pi';
import { ImLocation2 } from 'react-icons/im';
import Rating from 'react-rating';




const Doctors = ({ allDoctor }) => {
    const { image, name, study, specialist, position, place, rating, price } = allDoctor;

    return (
        <div className='grid grid-cols-1 row lg:grid-cols-3 mx-auto card m-3 bg-base-200'>
            <figure>
                <img className='w-3/4 p-4 shadow-lg rounded-lg' src={image} alt="" />
            </figure>
            <div className='mx-4 my-4'>
                <p className="font-bold text-black text-xl">{name}</p>
                <p className='flex gap-3'><span className='text-2xl'><FcGraduationCap /></span>{study}</p>
                <p className='flex gap-3'><span className='text-xl'><GrUserExpert /></span>{specialist}</p>
                <p className='flex gap-3'><span className='text-xl'><FaUserDoctor /></span>{position}</p>
                <p className='flex gap-3'><span className='text-xl'><FaHospital /></span>{place}</p>
                <p className='flex items-center gap-2'><Rating
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                /><span className=''>{rating}</span></p>
            </div>
            <div className='w-1/2 mx-auto lg:mt-3'>
                <div>
                    <h2 className='flex items-center gap-3'><span className='text-xl'><FcLike /></span> 90%</h2>
                    <h2 className='flex items-center gap-3'><span className='text-xl'><FcFeedback /></span> 20 Feedback</h2>
                    <h2 className='flex items-center gap-3'><span className='text-xl'><PiCurrencyDollarFill /></span>${price}</h2>
                    <h2 className='flex items-center gap-3'><span className='text-xl'><ImLocation2 /></span></h2>
                </div>
                <div className='flex flex-col my-3 '>
<<<<<<< HEAD
                    <button className='btn btn-secondary  btn-xs my-2'>View Profile</button>
=======
                    <button className='btn btn-primary  btn-xs my-2'>View Profile</button>
>>>>>>> Sraboni
                    <button className='btn btn-outline btn-xs'>Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;