"use client";
import { Accordion } from "keep-react";
import { CaretDown, CaretUp } from "phosphor-react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Faq = () => {
  return (
    <div
      className="container  md:p-20 p-8 mx-auto mt-10 img-slide opacity-0 duration-1000 "
      // style={{
      //   backgroundImage:
      //     "url(https://img.freepik.com/free-vector/white-question-mark-background-minimal-style_1017-25235.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais)",
      // }}
    >
      <div className="text-center">
        <h3 className="md:text-3xl text-xl  font-semibold">
          Frequently Asked Questions <span className="text-4xl font-bold">?</span>
        </h3>
      </div>
      <div className="flex w-full mx-auto mt-5 gap-5 flex-col lg:flex-row">
        <div className="w-full mx-auto lg:w-1/2">
          <img className=" lg:min-h-screen"
            src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg?size=626&ext=jpg&ga=GA1.1.1055064272.1680254175&semt=ais"
            alt=""
          />
        </div>
        <div className="mt-8 lg:w-1/2 bg-base-100 shadow-lg">
          <Accordion
            openIcon={<CaretUp />}
            closeIcon={<CaretDown />}
            iconPosition="right"
            flush={true}
          >
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">How can i login?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  You can login with Google and Email
                  <br />
                  Or if you have no account, you can make an account.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">How can I see doctors details?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  In navbar there is a Doctor button.By click on this button,
                  you can all of our doctors.And you can see all doctors have a
                  view profile button. By click on any doctors view profile
                  button you can see their full details.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">Can I book appoinment?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  Yes, In banner section have a Make Appoinment button.By click
                  on this button you can see a Book Appointment.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">How Can I book appoinment?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  In banner section have a Make Appoinment button.By click on
                  this button you can see a Book Appointment.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">Is there a Payment system here?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">Yes, you can payment easily.</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">Can I contact a doctor?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">Yes, you can contact easily.</p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">Can I chat with you?</Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  Yes, you can chat us.If you login, you can see dashboard. In
                  dashboard there are chat option.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">
                How can I review on your website.?
              </Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">
                  If you login, you can see dashboard. In dashboard there are
                  review option.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className=" hover:bg-slate-400 hover:uppercase">
                Can I get prescription of doctors?
              </Accordion.Title>
              <Accordion.Content>
                <p className="leading-7 shadow-md p-5">Yes.Doctor give you prescription</p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
