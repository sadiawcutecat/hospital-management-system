import React, { useEffect, useState } from "react";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { FaStar } from "react-icons/fa";

const CheckOutForm = ({ doctor, user }) => {
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [doctorName, setDoctorName] = useState("");
  const [price, setPrice] = useState(0);
  const [doctorId, setDoctorId] = useState("");

  const elements = useElements();
  const stripe = useStripe();

  useEffect(() => {
    if (doctor?.result?.at(0)?.price) setPrice(doctor?.result?.at(0)?.price);
  }, [doctor]);

  const handlePayment = async () => {
    try {
      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) throw new Error(error.message);

      const response = await fetch("http://localhost:3000/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          doctorName,
          doctorId,
          price,
        }),
      });

      

      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();

      const confirm = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

      if (confirm.error) return alert("Payment unsuccessful!");
      alert("Payment Successful! Appointment Done.");
    } catch (err) {
      console.error(err);
      alert("Payment failed! " + err.message);
    }
  };
  return (
    <div>
      <div className="mt-10 lg:mt-28 my-28">
        {doctor?.result?.map(
          ({
            _id,
            image,
            name,
            study,
            specialist,
            rating,
            price,
            Chamber_Appointment,
          }) => {
            return (
              <div key={_id}>
                <div className="mt-[90px] my-10">
                  <form action="" className="px-4">
                    <div className="flex flex-col-reverse justify-center gap-3 lg:flex-row">
                      <div className="p-1 space-y-3 lg:p-9">
                        <h2 className="text-xl font-bold text-center underline">
                          Information
                        </h2>
                        <div className="grid items-center justify-between grid-cols-2 gap-1 lg:gap-3 ">
                          <label className="text-xs lg:text-xl">
                            Patient Name
                          </label>
                          <input
                            className="w-full px-2 text-xs border-1/2 input-xs lg:text-xl"
                            type="text"
                            value={user?.displayName}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={user.displayName}
                          />
                          <label className="text-xs lg:text-xl">
                            Patient Email
                          </label>
                          <input
                            className="w-full px-2 text-xs border-1/2 input-xs lg:text-xl"
                            type="text"
                            value={user?.email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={user.email}
                          />
                          <label className="text-xs lg:text-xl">
                            Doctor Name
                          </label>
                          <input
                            className="w-full px-2 text-xs border-1/2 input-xs lg:text-xl"
                            type="text"
                            value={name}
                            onChange={(e) => setDoctorName(e.target.value)}
                            placeholder={name}
                          />
                          <label className="text-xs lg:text-xl">
                            Doctor Id
                          </label>
                          <input
                            className="w-full px-2 text-xs border-1/2 input-xs lg:text-xl"
                            type="text"
                            value={_id}
                            onChange={(e) => setDoctorId(e.target.value)}
                            placeholder={_id}
                          />
                          <label className="text-xs lg:text-xl">
                            Consulting fee
                          </label>
                          <input
                            className="w-full px-2 text-xs border-1/2 input-xs lg:text-xl"
                            type="text"
                            value={price}
                            readOnly
                          />
                        </div>
                        <div className="grid grid-flow-col space-x-4 justify-stretch"></div>
                        <div className="mt-5 space-y-5">
                          <h3>Payment Method</h3>
                          <div className="space-y-5">
                            <div>
                              <div className="flex flex-row justify-between gap-4">
                                <p>Card Number</p>
                                <p>Expiry Date</p>
                              </div>
                              <CardElement className="p-3 border-2"></CardElement>
                            </div>
                            <button
                              type="button"
                              className="text-white bg-red-600 btn"
                              onClick={handlePayment}
                            >
                              Confirm Payment
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-1 lg;p-9   ">
                        <h2 className="my-4 text-xl font-bold">
                          {" "}
                          Booking Summary
                        </h2>
                        <div>
                          <div className="flex flex-col gap-3">
                            <img className="h-[400px]" src={image} alt="" />
                            <h3>Name: {name}</h3>
                            <p className="flex flex-row items-center gap-2">
                              Ratings: {rating} <FaStar></FaStar>
                            </p>
                            <p>Study: {study}</p>
                          </div>
                          <div>
                            <p>
                              Specialist:
                              <span className="text-sm">{specialist}</span>
                            </p>
                            <p>Consulting fee: {price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default CheckOutForm;
