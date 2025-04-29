import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/graphics/arrow.svg";
import HeroSectionImg from "../../assets/graphics/illustrations/heroSectionImage.svg";
import LeftBlob from "../../assets/graphics/leftBlob.svg";

const Hero = () => {
  const [email, setEmail] = useState("") ;
  const navigate = useNavigate();

  const emailChangeHandler = (e) => {
    // console.log(e.target.value) ;
    setEmail(e.target.value);
  }

  const emailSubmitHandler = (e) => {
    // console.log(email) ;
    e.preventDefault() ;
    navigate("/signUp", {state: {email}});
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-28 lg:pr-0 pt-20 pb-10">
      <img src={LeftBlob} className="absolute pointer-events-none select-none top-0 left-0 w-full max-w-[400px]" alt="Blob" />
      <div className="w-full lg:w-1/2   z-10">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3 leading-tight sm:text-center text-center lg:text-left">
          Your Hub for Effortless
        </div>
        <div className="text-indigo-600 text-4xl sm:text-5xl lg:text-6xl font-semibold text-center sm:text-center lg:text-left">
          Productivity
        </div>
        <p className="text-lg sm:text-xl text-gray-600 mt-6 mb-10 tracking-wide sm:text-center lg:text-left text-center">
          Dive into a seamless task management experience. View your daily
          progress, manage projects, and stay consistent, all in one place.
        </p>

        <form onSubmit={emailSubmitHandler} className="relative mx-auto md:m-0  flex items-center max-w-lg">
          <input
            className="bg-white h-14 sm:h-16 w-full border-2 border-indigo-600 rounded-full pl-6 focus:border-indigo-600 focus:outline-1 focus:outline-indigo-600 pr-36 sm:pr-40 "
            placeholder="Enter your email"
            value={email}
            onChange={emailChangeHandler}
          />
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-full flex gap-2 items-center absolute right-2 sm:right-3.5 cursor-pointer" type="submit"
          >
          {/* <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-full flex gap-2 items-center absolute right-3.5" type="submit"
          > */}
            Sign Up <img src={Arrow} className="scale-80" alt="arrow"/>
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 z-10">
      {/* <div className="w-1/2"> */}
        <img src={HeroSectionImg} className="hidden lg:block pointer-events-none select-none w-full max-w-xl mx-auto" />
      </div>
    </div>
  );
};

export default Hero;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Arrow from "../../graphics/arrow.svg";
// import HeroSectionImg from "../../graphics/illustrations/heroSectionImage.svg";
// import LeftBlob from "../../graphics/leftBlob.svg";

// const Hero = () => {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const emailChangeHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const emailSubmitHandler = (e) => {
//     e.preventDefault();
//     navigate("/sign-up");
//   };

//   return (
//     <div className="flex flex-col-reverse lg:flex-row items-center justify-between relative px-6 sm:px-10 lg:px-28 pt-20 pb-10">
//       <img
//         src={LeftBlob}
//         className="absolute top-0 left-0 w-full max-w-[400px] z-0 pointer-events-none select-none"
//         alt="Blob"
//       />
//       <div className="w-full lg:w-1/2 z-10">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3 leading-tight">
//           Your Hub for Effortless
//         </h1>
//         <h2 className="text-indigo-600 text-4xl sm:text-5xl lg:text-6xl font-semibold">
//           Productivity
//         </h2>
//         <p className="text-lg sm:text-xl text-gray-600 mt-6 mb-10 tracking-wide">
//           Dive into a seamless task management experience. View your daily
//           progress, manage projects, and stay consistent, all in one place.
//         </p>

//         <form
//           onSubmit={emailSubmitHandler}
//           className="relative flex items-center w-full"
//         >
//           <input
//             className="bg-white h-14 sm:h-16 w-full border-2 border-indigo-600 rounded-full pl-6 pr-36 sm:pr-40 focus:outline-indigo-600"
//             placeholder="Enter your email"
//             value={email}
//             onChange={emailChangeHandler}
//           />
//           <button
//             type="submit"
//             className="absolute right-2 sm:right-3.5 px-4 py-2 bg-indigo-600 text-white rounded-full flex items-center gap-2"
//           >
//             Sign Up <img src={Arrow} alt="arrow" />
//           </button>
//         </form>
//       </div>

//       <div className="w-full lg:w-1/2 mb-10 lg:mb-0 z-10">
//         <img
//           src={HeroSectionImg}
//           alt="Hero Illustration"
//           className="pointer-events-none select-none w-full max-w-xl mx-auto"
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;