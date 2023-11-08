"use client";
import { BsPeople } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
const About = () => {
  return   <div>
  <div
    className="hero min-h-screen  mx-auto"
    style={{
      backgroundImage:
        "url(https://res.cloudinary.com/drhtv8dr4/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1698736232/group-doctors-with-heart-symbol_329181-19665_by0ils.avif)",
    }}
  >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-xl uppercase space-y-4">
        <h1 className="underline underline-offset-8 font-bold">
          Find the best healthcare solution for your healthy life.
        </h1>
        <h1 className="mb-5 text-3xl lg:text-6xl font-extrabold">
          About Us
        </h1>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto p-8 lg:p-28 mt-2">
    <img
      className="mt-4"
      src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=sph"
      alt=""
    />
    <div className="bg-blue-700 text-white p-8 justify-center text-start mt-4">
      <h1 className="text-2xl font-bold my-4">
        We are dedicated to the innovation and development of solutions for
        healthcare sector.
      </h1>
      <p className="leading-8 my-6">
        We connect people, information and processes. Our solutions are
        characterized by their easy integration, their great adaptability
        and their total freedom of deployment.
      </p>
      <button className="font-semibold mt-2 border-b-2">
        Get in touch
      </button>
    </div>
    <div className="bg-base-200 mx-4 mt-4 px-3">
      <img
        src="https://img.freepik.com/free-photo/team-expert-doctors-sitting-desk-hospital-conference-room-having-briefing-clinic-expert-therapist-talking-with-colleagues-about-disease-treatment-development-medicine-professional_482257-3677.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais"
        alt=""
      />
      <div className="c">
        <h1 className="text-xl font-semibold mb-4">Who We Are</h1>
        <p className="leading-8">
          We are a company with culture and codes of ethics. Our values
          ​​are what unite us, but our differences are what inspire us. We
          strive to do our best and celebrate our successes at every
          opportunity.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-base-200 container mx-auto justify-center p-4 lg:p-28">
    <div className="text-center pb-4 lg:pb-16 lg:space-y-3">
      <p className="text-sm lg:text-md">
        A CHOICE THAT MAKES THE DIFFERENCE
      </p>
      <h1 className="text-2xl lg:text-4xl font-bold">
        Reasons to Choose Us
      </h1>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg p-8 flex justify-center">
        <div className="text-5xl text-blue-300 me-4">
          <HiOutlineLightBulb />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">Innovation</h1>
          <p>
            We are at the forefront of technology and we adapt to market
            changes, meeting customer requirements.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-8 flex justify-center">
        <div className="text-5xl text-blue-300 me-4">
          <BsPeople />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">Teamwork</h1>
          <p>
            We value and encourage the contributions of each person to
            achieve business objectives.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-8 flex justify-center">
        <div className="text-5xl text-blue-300 me-4">
          <FaRegHandshake />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">Trust</h1>
          <p>
            We have a wide portfolio of loyal customers thanks to the
            solutions raised to the needs that arise.
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-8 flex justify-center">
        <div className="text-5xl text-blue-300 me-4">
          <FaPeopleRobbery />
        </div>
        <div className="space-y-3">
          <h1 className="font-bold">Experience</h1>
          <p>
            Team made up of professionals with many years of experience, to
            which new talents are being incorporated with renewed and
            innovative ideas.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto  p-8 lg:p-28 mt-4">
    <div className="flex  -space-x-[35px] lg:-space-x-[45px]">
      <div>
        <img className="rounded-lg h-[300px] lg:h-[500px]"
          src="https://img.freepik.com/free-photo/front-view-smiley-man-wearing-lab-coat_23-2149633830.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=sph"
          alt=""
        />
      </div>
      <div className="my-4">
        <img className="rounded-lg h-[300px] lg:h-[500px]"
          src="https://img.freepik.com/free-photo/asian-female-doctor-talking-mobile-phone-office-looking-records_1098-20346.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais"
          alt=""
        />
      </div>
    </div>
    <div className=" p-8 lg:p-28 mt-4">
      <h1 className="text-4xl font-semibold mb-4">The Company</h1>
      <p className="leading-8 font-normal">
        OnClick Technologies is the company behind the world`s favorite
        Hospital Management System. OnClick Technologies is an innovative IT
        Company that has been helping clients across the globe to achieve
        their goals.
      </p>
      <button className="btn btn-outline bg-black text-white mt-5">Contact us</button>
    </div>
  </div>
</div>;
};

export default About;
