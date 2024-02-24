import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <div className="flex flex-wrap contactus">
      <div className="w-full md:w-1/2">
        <img
          src="/images/contactus.jpeg"
          alt="contactus"
          className="w-full"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center ">
       <div className="ml-10">
       <h1 className="text-white">CONTACT US</h1>
        <p className="text-justify mt-2">
               any query and info about product feel free to call anytime we are 24x7 available
        </p>
        <p className="mt-3 flex items-center">
          <BiMailSend className="mr-2" />
          <span>www.help@ecommerceapp.com</span>
        </p>
        <p className="mt-3 flex items-center">
          <BiPhoneCall className="mr-2" />
          <span>012-3456789</span>
        </p>
        <p className="mt-3 flex items-center">
          <BiSupport className="mr-2" />
          <span>1800-0000-0000 (toll free)</span>
        </p>
       </div>
      </div>
    </div>
  );
};

export default Contact;
