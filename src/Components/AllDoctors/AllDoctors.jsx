'use client';
import { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';

const AllDoctors = () => {
    const [allDoctors, setAllDoctors] = useState([])
    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setAllDoctors(data))
    }, []);

    return (
        <div className='my-4 container mx-auto'>
            <div className='my-2'>
                <h2 className='text-3xl font-extrabold font-serif underline lg:w-1/3 mx-auto '><span className='text-emerald-500 mx-auto'>O</span>ur All D<span className='text-emerald-500'>o</span>ct<span className='text-emerald-500'>0r</span>s Are Here</h2>
                <p className='text-sm mx-auto px-4 mt-2'>
                    One of the most important positions in our society is held by doctors. Doctors are trained in the <span className='text-black font-bold'>medical profession</span>.
                    They help their patients identify the ailments they are suffering from, and also give them the appropriate medicine and treatment to combat these diseases or illnesses.
                    Thus, doctors are responsible for keeping us healthy, and good health is one of the utmost priorities of anyone’s life.
                    Doctors work hard every day to keep people fit and even save them from life and <span className='text-black font-bold'>death situations</span>.
                    The profession of a doctor is an extremely noble one, helping and saving those in need.
                </p>
            </div>
            <div>
                {
                    allDoctors.map(allDoctor => <Doctors key={allDoctor.id} allDoctor={allDoctor}></Doctors>)
                }
            </div>
        </div>
    );
};

export default AllDoctors;