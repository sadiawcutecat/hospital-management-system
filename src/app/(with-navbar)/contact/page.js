import Image from "next/image";
import contact from "@/assets/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className=" ">
        <div className="relative">
          <Image
            width={5000}
            height={5000}
            src={contact}
            className=" w-[100vw] h-[80vh] mx-auto object-cover "
            alt=""
          />
          <div className=" absolute  w-full bg-black/50 h-full top-0 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white w-full bg-black/40 text-center py-4">
              Feel Free To Contact Us
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between  my-20 w-8/12 mx-auto bg-white  ">
        <div className="w-full flex justify-center">
          <div className="text-xl">
            <h1 className="text-3xl font-semibold">Branch-1</h1>
            <p className="text-md">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">satkhira khulna</span>
            </p>
            <p className="text-md">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="text-md">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="text-xl">
            <h1 className="text-3xl font-semibold">Branch-2</h1>
            <p className="text-md">
              <strong>Address</strong> :{" "}
              <span className="text-slate-500">khulna</span>
            </p>
            <p className="text-md">
              <strong>Email</strong> :{" "}
              <span className="text-slate-500">healthcare@gmail.com</span>
            </p>
            <p className="text-md">
              <strong>Phone</strong> :{" "}
              <span className="text-slate-500">+8801xxxxxxx</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
