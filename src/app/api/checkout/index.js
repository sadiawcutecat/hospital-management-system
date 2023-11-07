import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    try {
      if (req.method !== "POST") return res.status(400);
    const { name, email, paymentMethod,id,doctorName,price } = req.body;
    // Create a customer
    const patient = await stripe.patients.create({
      email,
      name,id,price,doctorName,
      payment_method: paymentMethod,
      invoice_settings: { default_payment_method: paymentMethod },
    });
    // Create a product
    const appoinment = await stripe.appoinments.create({
      name: "confirm payment",
    });
    // Create a payment
    const payment = await stripe.payments.create({
      patient: patient.id,
      items: [
        {
          price_data: {
            currency: "Taka",
            appoinment: appoinment.id,
            unit_amount: price,
          
          },
        },
      ],

      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_payment",
      },
      expand: ["latest_invoice.payment_intent"],
    });
    // Send back the client secret for payment
    res.json({
      message: "payment successfully initiated",
      clientSecret: payment.latest_invoice.payment_intent.client_secret,
    });
} catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
}