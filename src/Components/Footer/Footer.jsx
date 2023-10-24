import Link from "next/link";
import { FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-16 bg-[#262b35] grid md:grid-cols-4 grid-cols-1  text-[#8890a4]">
        <div>
          <h1 className="flex items-center text-2xl font-bold">
            <span>
              {" "}
              <img
                src="https://i.ibb.co/NpptRzh/download-removebg-preview.png"
                alt=""
                className="h-10 w-10"
              />
            </span>
            <span>HealthCare</span>
          </h1>

          <p className="font-bold">
            <br />
            Providing reliable treatment since 2000
          </p>
        </div>

        <div className="mx-auto text-center">
          <span className="  font-bold">Navigation's</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contacts">Contacts</Link>
          <Link href="/doctors">Doctors</Link>
        </div>
        <div className="mx-auto">
          <span className="font-bold">Contact</span>
          <div>
            <p className="text-md">
              <strong>Email</strong> : jihanstk@gmail.com
            </p>
            <p className="text-md">
              <strong>Address</strong> : Sector-12,Uttara Dhaka
            </p>
          </div>
        </div>
        <div className="mx-auto">
          <span className="font-bold text-center ">Social</span>
          <div className="grid grid-flow-col gap-4 text-white">
            <FaTwitter style={{ fontSize: "2rem" }}></FaTwitter>
            <FaYoutube style={{ fontSize: "2rem" }}></FaYoutube>
            <FaFacebookF style={{ fontSize: "2rem" }}></FaFacebookF>
          </div>
        </div>
      </footer>
      <div className="footer footer-center font-bold bg-[#262b35] text-[#8890a4]  p-4">
        <p>Copyright © 2023 - All right reserved by HealthCare Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
