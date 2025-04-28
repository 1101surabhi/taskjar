// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import TaskjarBrand from "../../graphics/taskjarBrand_light.svg";
// import ContactSvg from "../../graphics/contact.svg";
// import SendIcon from "../../graphics/send.svg";
// import GithubIcon from "../../graphics/github.svg";
// import LinkedinIcon from "../../graphics/linkedin.svg";
// import MailIcon from "../../graphics/mail.svg";

// const Footer = () => {
//   const [message, setMessage] = useState("");

//   const messageChangeHandler = (e) => {
//     // console.log(e.target.value);
//     setMessage(e.target.value);
//   };

//   const messageSubmitHandler = (e) => {
//     console.log(message);
//     e.preventDefault();
//     navigate("/send-message")
//   };

//   const navigate = useNavigate();
//   return (
//     <div className="bg-[#1B262C] px-32 pt-32 pb-6 relative">
//       <div className="flex gap-4 items-center">
//         <div className="w-1/2 text-6xl font-semibold text-white">
//           Ready to boost <br></br> your productivity?
//         </div>
//         <div className="w-1/2">
//           <button
//             className="bg-[#f4f4f4] px-10 py-4 rounded-full text-xl font-medium border-[#1B262C] hover:border-1 hover:border-[#f4f4f4] hover:bg-[#1B262C] hover:text-[#f4f4f4] mr-12"
//             onClick={() => navigate("/sign-up")}
//           >
//             Sign Up
//           </button>
//           <button
//             className="bg-[#f4f4f4] px-10 py-4 rounded-full text-xl font-medium border-[#1B262C] hover:border-1 hover:border-[#f4f4f4] hover:bg-[#1B262C] hover:text-[#f4f4f4]"
//             onClick={() => navigate("/login")}
//           >
//             Sign In
//           </button>
//         </div>
//       </div>

//       <div className="h-0.5 w-full bg-[#f4f4f4] mt-20 mb-11"></div>

//       <div className="flex gap-4">
//         <div className="w-1/2">
//           <img src={TaskjarBrand} />
//           <p className="text-[#B7B7B7] text-xl my-6">
//             Designed to help teams and individuals stay organized, focused, and
//             on track.
//           </p>
//         </div>

//         <div className="w-1/2">
//           <p className="font-semibold text-[#f4f4f4] text-3xl">Contact Us</p>
//           <div className="relative flex items-center max-w-lg  mt-6">
//             <input
//               className="bg-[#f4f4f4] h-16 w-full rounded-full pl-6 pr-20 focus:outline-0"
//               placeholder="Write message..."
//               value={message}
//               onChange={messageChangeHandler}
//             />
//             <button
//               className="px-2.5 py-2.5 bg-[#1B262C] text-white rounded-full absolute right-3.5 cursor-pointer"
//               type="submit"
//               onClick={messageSubmitHandler}
//               // send link to be added from the backend
//             >
//               <img src={SendIcon} />
//             </button>
//           </div>
//           <p className="text-white font-semibold text-3xl mt-12">
//             Social Links
//           </p>
//           <div className="flex gap-9 mt-6">
//             <img src={GithubIcon} />
//             <img src={LinkedinIcon} />
//             <img src={MailIcon} />
//           </div>
//         </div>
//       </div>
//       <div className="h-[0.5px] w-full bg-gradient-to-r from-[#1B262C] via-[#f4f4f4] to-[#1B262C] mt-20 mb-2"></div>
//       <p className="text-white text-center">
//         © 2024 TaskJar, Inc. All rights reserved.
//       </p>
//       <img
//         src={ContactSvg}
//         className="absolute top-126 left-0 z-10 pointer-events-none select-none scale-75"
//       />
//     </div>
//   );
// };

// export default Footer;








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
        <div className="w-1/2">
          <button
            onClick={() => navigate("/signUp")}
            className="bg-[#f4f4f4] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1B262C] hover:text-white border hover:border-white transition mr-10"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-[#f4f4f4] px-8 py-3 rounded-full text-lg font-medium hover:bg-[#1B262C] hover:text-white border hover:border-white transition"
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
            Designed to help teams and individuals stay organized, focused, and on track.
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
              className="absolute right-3.5 p-2 bg-[#1B262C] text-white rounded-full"
            >
              <img src={SendIcon} alt="Send" />
            </button>
          </form>

          <p className="font-semibold text-2xl">Social Links</p>
          <div className="flex gap-6 mt-4">
            <img src={GithubIcon} alt="GitHub" />
            <img src={LinkedinIcon} alt="LinkedIn" />
            <img src={MailIcon} alt="Email" />
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-[#1B262C] via-[#f4f4f4] to-[#1B262C] mt-16 mb-4"></div>
      <p className="text-center text-white text-sm">© 2024 TaskJar, Inc. All rights reserved.</p>

      <img
        src={ContactSvg}
        className="hidden absolute -bottom-12 left-0 w-64 opacity-30 pointer-events-none select-none"
        alt="Contact"
      />
    </div>
  );
};

export default Footer;