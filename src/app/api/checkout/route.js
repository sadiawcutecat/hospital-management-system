import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (req) => {

  try {
    if (req.method !== "POST") return;
    const { name, email, id, doctorName, price } = await req.json();
console.log(email)
    // Create a customer
    // const patient = await stripe.customers.create({
    //   email,
    //   name,
    //   invoice_settings: { default_payment_method: paymentMethod },
    // });

    // Create a product
    // const appoinment = await stripe.appoinments.create({
    //   name: "confirm payment",
    // });  
    // Create a payment   
    const amount = parseFloat((price * 100).toFixed(2));
  

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    // Send back the client secret for payment
    return NextResponse.json({
      message: "payment successfully initiated",
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Internal server error" });
  }
};
