// import useAuth from "@/Components/hooks/useAuth";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_7zcSdR2s_ExsXq82wLyWEcAFMR9h77HJv");

export const POST = async (req) => {
  //   const { emailMessage } = useAuth();
  const emailMessage = await req.json();
  console.log(emailMessage);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["jihanstk@gmail.com"],
      subject: "Hello world",
      text: "John",
    });

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
};
