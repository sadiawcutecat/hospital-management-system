"use client";
import useAuth from "@/Components/hooks/useAuth";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckOutForm from "@/Components/CheckOutForm/CheckOutForm";
import Loading from "@/Components/Common/Loading/Loading";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const paymentPage = ({ params }) => {
  const { user, loading } = useAuth();

  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    fetch(`/api/doctors/${params.paymentid}`)
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        console.log(data);
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <Elements stripe={stripePromise}>
      {user ? <CheckOutForm doctor={doctor} user={user} /> : redirect("/login")}
    </Elements>
  );
};

export default paymentPage;
