'use client';
import useAuth from '@/Components/hooks/useAuth';
import { CardElement, Elements, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, } from '@stripe/react-stripe-js';
import { Label } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import CheckOutForm from '@/Components/CheckOutForm/CheckOutForm';

const paymentPage = ({ params }) => {
    const { user, loading } = useAuth();
    if(loading){
        return "loading";
    }
 
    

    const [doctor, setDoctor] = useState([]);
    
    
    useEffect(() => {
      fetch(`/api/doctors/${params.paymentid}`)
        .then((res) => res.json())
        .then((data) => {
            setDoctor(data);
        });
    }, []);

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

    

    return (
     <Elements stripe={stripePromise}>
         {user ? (
           <CheckOutForm doctor={doctor} user={user} />
         ) : (
            <Login />
         )}
     </Elements>
    );
};

export default paymentPage;

