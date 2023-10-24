import React from 'react';
import { FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 pt-[100px]   text-base-content rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4 text-2xl">
            <FaFacebook/>
            <FaYoutube/>
            <FaWhatsapp/>
           
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2023 - All right reserved by Medic Hospital</p>
        </aside>
      </footer>
    );
};

export default Footer;