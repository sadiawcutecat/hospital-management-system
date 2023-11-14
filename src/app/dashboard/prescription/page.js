'use client';
import useAuth from '@/Components/hooks/useAuth';
import React, { useEffect, useState } from 'react';

const prescription = () => {
    const [prescription, setPrescription] = useState([]);
    const {user} = useAuth();
useEffect(()=>{
fetch(`/api/prescription/${user.email}`)
.then(res => res.json())
.then(data => setPrescription(data))

})

    return (
        <div>
            
        </div>
    );
};

export default prescription;