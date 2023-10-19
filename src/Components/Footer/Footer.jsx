import Link from 'next/link';
import { FaYoutube, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>

      <footer className="footer p-16 bg-[#262b35] flex items-center justify-evenly text-[#8890a4]">
        <div>
          <img src="https://i.ibb.co/NpptRzh/download-removebg-preview.png" alt="" className='h-20 w-20' />
          <p className='font-bold'>HealthCare<br />Providing reliable treatment since 2000</p>
        </div>
        <div>
          <span className="font-bold">Services</span>
          <Link href="">Branding</Link>
          <Link href="" >Design</Link>
          <Link href="" >Marketing</Link>
          <Link href="" >Advertisement</Link>
        </div>
        <div>
          <span className="  font-bold">Services</span>
          <Link href="">Legal</Link>
          <Link href="" >Terms of use</Link>
          <Link href="" >Privacy policy</Link>
          <Link href="" >Cookie policy</Link>
        </div>
        <div>
          <span className=" font-bold ">Social</span>
          <div className="grid grid-flow-col gap-4 text-white">

            <FaTwitter style={{ fontSize: '2rem', }}></FaTwitter>
            <FaYoutube style={{ fontSize: '2rem', }}></FaYoutube>
            <FaFacebookF style={{ fontSize: '2rem', }}></FaFacebookF>
          </div>
        </div>


      </footer >
      <div className="footer footer-center font-bold bg-[#262b35] text-[#8890a4]  p-4">
        <p>Copyright © 2023 - All right reserved by HealthCare Ltd</p>
      </div>
    </div >

  );
};

export default Footer;