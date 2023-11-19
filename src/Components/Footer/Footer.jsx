import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      label: "Home",
      path: "/",
      // icon: <GiFamilyHouse fontSize={20} />,
    },
    {
      label: "About",
      path: "/about",
      // icon: <SlInfo fontSize={20} />,
    },
    {
      label: "Contact",
      path: "/contact",
      // icon: <SlInfo fontSize={20} />,
    },
    {
      label: "Doctors",
      path: "/doctors",
      // icon: <FaUserDoctor fontSize={20} ></FaUserDoctor>
    },
    // {
    //   label: "Dashboard",
    //   path: "/dashboard/doctors-peation",
    //   // icon: <RxDashboard fontSize={20} />,
    // },
  ];
  return (
    <div>
      <footer className="footer p-10 bg-[#1D2D50] text-white ">
        <nav className="mx-auto md:text-left text-center">
          <header className="footer-title md:mx-0 mx-auto">Services</header>
          <p className=" md:mx-0 mx-auto">Best Test Report</p>
          <p className=" md:mx-0 mx-auto">Best Professional Doctors</p>
          <p className=" md:mx-0 mx-auto">Admitted Hospital & Best Service</p>
          <p className=" md:mx-0 mx-auto">Best Petain Care</p>
        </nav>
        <nav className="md:text-left text-center mx-auto">
          <header className="footer-title md:mx-0 mx-auto">Navigation's</header>
          {links.map((link) => {
            return (
              <Link
                className="md:mx-0 mx-auto link link-hover"
                key={link.path}
                href={link.path}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <nav className="md:text-left text-center mx-auto">
          <header className="footer-title md:mx-0 mx-auto">Address</header>
          <p className="md:mx-0 mx-auto">
            {" "}
            <strong className="text-slate-300">Email</strong>:{" "}
            <span className="text-slate-400">health@care.com</span>{" "}
          </p>
          <p className="md:mx-0 mx-auto">
            {" "}
            <strong className="text-slate-300">Phone</strong>:{" "}
            <span className="text-slate-400">+880134XXXXXXX</span>{" "}
          </p>
          <p className="md:mx-0 mx-auto">
            {" "}
            <strong className="text-slate-300">Location</strong>:{" "}
            <span className="text-slate-400">Dhaka,Gazipur</span>{" "}
          </p>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-[#1D2D50] text-white border-base-300">
        <aside className="items-center grid-flow-col">
          <h1 className="flex items-center text-2xl font-bold">
            <span>
              {" "}
              <img
                src="https://i.ibb.co/NpptRzh/download-removebg-preview.png"
                alt=""
                className="h-20 w-20"
              />
            </span>
            <span>
              HealthCare
              <br />
              <span className="text-sm text-slate-400 font-normal ">
                {" "}
                providing services Since 2015
              </span>
            </span>
          </h1>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <div className="mx-auto">
              <span className="font-bold text-center ">Social</span>
              <div className="grid grid-flow-col gap-4 text-white">
                <a href="https://www.twitter.com" target="blank">
                  {" "}
                  <FaTwitter style={{ fontSize: "2rem" }}></FaTwitter>
                </a>
                <a href="https://www.youtube.com" target="blank">
                  {" "}
                  <FaYoutube style={{ fontSize: "2rem" }}></FaYoutube>
                </a>
                <a href="https://www.facebook.com" target="blank">
                  {" "}
                  <FaFacebookF style={{ fontSize: "2rem" }}></FaFacebookF>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
