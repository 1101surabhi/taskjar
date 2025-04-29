import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskjarBrand from "../../assets/graphics/taskjarBrand_light.svg";
import ContactSvg from "../../assets/graphics/contact.svg";
import SendIcon from "../../assets/graphics/send.svg";
import GithubIcon from "../../assets/graphics/github.svg";
import LinkedinIcon from "../../assets/graphics/linkedin.svg";
import MailIcon from "../../assets/graphics/mail.svg";

const Footer = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const messageSubmitHandler = (e) => {
    e.preventDefault();
    console.log(message);
    navigate("/send-message");
  };

  return (
    <div className="bg-[#1B262C] px-6 sm:px-10 md:px-16 xl:px-32 pt-20 pb-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
        <div className="text-white text-4xl sm:text-5xl font-semibold">
          Ready to boost <br /> your productivity?
        </div>
        <div className=" w-full   md:w-1/2">
          <button
            onClick={() => navigate("/signUp")}
            className="bg-[#f4f4f4] px-8 py-3 md:px-8 md:py-3 rounded-full text-lg font-medium hover:bg-[#1B262C] hover:text-white border hover:border-white transition md:mr-10"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#f4f4f4] px-9 py-3 lg:px-8 lg:py-3  rounded-full text-lg font-medium hover:bg-[#1B262C] hover:text-white border hover:border-white transition"
          >
            Sign In
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#f4f4f4] mt-16 mb-10" />

      <div className="flex flex-col md:flex-row justify-between gap-10 text-white">
        <div className="w-full md:w-1/2">
          <img src={TaskjarBrand} alt="Logo" />
          <p className="text-[#B7B7B7] text-lg mt-6">
            Designed to help teams and individuals stay organized, focused, and
            on track.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="font-semibold text-2xl mb-4">Contact Us</p>
          <form
            onSubmit={messageSubmitHandler}
            className="relative flex items-center w-full mb-8"
          >
            <input
              className="bg-[#f4f4f4] h-14 w-full rounded-full pl-6 pr-20 text-black focus:outline-none"
              placeholder="Write message..."
              value={message}
              onChange={messageChangeHandler}
            />
            <button
              type="submit"
              className="cursor-pointer absolute right-3.5 p-3 bg-[#1B262C] text-white rounded-full"
            >
              <img src={SendIcon} alt="Send" />
            </button>
          </form>

          <p className="font-semibold text-2xl">Social Links</p>
          <div className="flex gap-6 mt-4">
            <a href="https://github.com/1101surabhi/taskjar" target="_blank">
              <img src={GithubIcon} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/surabhiagarwal-/" target="_blank">
              <img src={LinkedinIcon} alt="LinkedIn" target="_blank"/>
            </a>
            <a href="mailto:shivamtiwari0322@gmail.com?subject=Mail%20from%20TaskJar">
              <img src={MailIcon} alt="Email" target="_blank"/>
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-[#1B262C] via-[#f4f4f4] to-[#1B262C] mt-16 mb-4"></div>
      <p className="text-center text-white text-sm">
        © 2025 TaskJar, Inc. All rights reserved.
      </p>

      <img
        src={ContactSvg}
        className="hidden absolute -bottom-12 left-0 w-64 opacity-30 pointer-events-none select-none"
        alt="Contact"
      />
    </div>
  );
};

export default Footer;
