import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import TaskJarBrand from "../../assets/graphics/taskjarBrand.svg";
import { Menu, X } from "lucide-react"; // for hamburger icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-20 top-0 left-0 w-full  md:pt-2.5  border-b border-gray-300 md:pb-3 bg-[#f4f4f4]">
      <div className="flex mx-5 sm:mx-13 lg:mx-25 justify-between items-center">
        <img
          src={TaskJarBrand}
          onClick={() => navigate("/")}
          className="h-8 lg:h-12 cursor-pointer"
        />
        {/* </div> */}

        <nav className="hidden md:flex gap-12 xl:gap-20">
          {["home", "about", "contact"].map((section, index) => (
            <Link
              to={section}
              spy={true}
              offset={-70}
              className="text-[#444444] cursor-pointer hover:text-indigo-600 capitalize"
              activeClass="text-indigo-600"
              smooth={true}
              duration={500}
              key={index}
            >
              {section}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex lg:gap-4 items-center">
          <button
            className="border px-5 py-2 rounded-full text-indigo-600 mr-10 hover:bg-indigo-600 hover:text-white transition"
            onClick={() => navigate("/login")}
          >
            Sign in
          </button>
          <button
            className="border-1 bg-indigo-600 px-5.5 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 transition"
            onClick={() => navigate("/signUp")}
          >
            Sign up
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <X
              className="h-6 w-6 text-gray-700 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Menu
              className="h-6 w-6 text-gray-700 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[#f4f4f4]">
          {["home", "about", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              spy={true}
              offset={-70}
              className="text-[#444444] cursor-pointer hover:text-indigo-600 capitalize"
              activeClass="text-indigo-600"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              {section}
            </Link>
          ))}
          <button
            className="border w-32 py-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
            onClick={() => {
              setIsOpen(false);
              navigate("/login");
            }}
          >
            Sign in
          </button>
          <button
            className="bg-indigo-600 w-32 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 transition"
            onClick={() => {
              setIsOpen(false);
              navigate("/sign-up");
            }}
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-scroll";
// import TaskJarBrand from "../../graphics/taskjarBrand.svg";
// import { Menu, X } from "lucide-react"; // for hamburger icons

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed z-10 top-0 left-0 w-full bg-[#f4f4f4] border-b border-gray-300">
//       <div className="flex justify-between items-center px-4 md:px-10 py-3">
//         {/* Brand Logo */}
//         <img
//           src={TaskJarBrand}
//           onClick={() => navigate("/")}
//           className="h-8 cursor-pointer"
//         />

//         {/* Desktop Nav Links */}
//         <nav className="hidden md:flex gap-12">
//           {["home", "about", "contact"].map((section) => (
//             <Link
//               key={section}
//               to={section}
//               spy={true}
//               offset={-70}
//               className="text-[#444444] cursor-pointer hover:text-indigo-600 capitalize"
//               activeClass="text-indigo-600"
//               smooth={true}
//               duration={500}
//             >
//               {section}
//             </Link>
//           ))}
//         </nav>

//         {/* Buttons (Sign In / Sign Up) */}
//         <div className="hidden md:flex gap-4 items-center">
//           <button
//             className="border px-5 py-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
//             onClick={() => navigate("/login")}
//           >
//             Sign in
//           </button>
//           <button
//             className="bg-indigo-600 px-5 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 transition"
//             onClick={() => navigate("/sign-up")}
//           >
//             Sign up
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           {isOpen ? (
//             <X
//               className="h-6 w-6 text-gray-700 cursor-pointer"
//               onClick={() => setIsOpen(false)}
//             />
//           ) : (
//             <Menu
//               className="h-6 w-6 text-gray-700 cursor-pointer"
//               onClick={() => setIsOpen(true)}
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-[#f4f4f4]">
//           {["home", "about", "contact"].map((section) => (
//             <Link
//               key={section}
//               to={section}
//               spy={true}
//               offset={-70}
//               className="text-[#444444] cursor-pointer hover:text-indigo-600 capitalize"
//               activeClass="text-indigo-600"
//               smooth={true}
//               duration={500}
//               onClick={() => setIsOpen(false)}
//             >
//               {section}
//             </Link>
//           ))}
//           <button
//             className="border w-32 py-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
//             onClick={() => {
//               setIsOpen(false);
//               navigate("/login");
//             }}
//           >
//             Sign in
//           </button>
//           <button
//             className="bg-indigo-600 w-32 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 border hover:border-indigo-600 transition"
//             onClick={() => {
//               setIsOpen(false);
//               navigate("/sign-up");
//             }}
//           >
//             Sign up
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Link } from "react-scroll";
// import { Menu, X } from "lucide-react";
// import TaskJarBrand from "../../graphics/taskjarBrand.svg";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed z-10 top-0 left-0 w-full border-b border-gray-300 bg-[#f4f4f4]">
//       <div className="flex justify-between items-center px-6 py-4 md:px-12">
//         <img
//           src={TaskJarBrand}
//           onClick={() => navigate("/")}
//           className="cursor-pointer w-32"
//         />

//         <div className="md:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <nav className="hidden md:flex gap-14 items-center">
//           <Link
//             to="home"
//             spy={true}
//             offset={-70}
//             className="text-[#444444] cursor-pointer hover:text-indigo-600"
//             activeClass="text-indigo-600"
//             smooth={true}
//             duration={500}
//           >
//             Home
//           </Link>
//           <Link
//             to="about"
//             spy={true}
//             offset={-70}
//             className="text-[#444444] cursor-pointer hover:text-indigo-600"
//             activeClass="text-indigo-600"
//             smooth={true}
//             duration={500}
//           >
//             About
//           </Link>
//           <Link
//             to="contact"
//             spy={true}
//             offset={-70}
//             className="text-[#444444] cursor-pointer hover:text-indigo-600"
//             activeClass="text-indigo-600"
//             smooth={true}
//             duration={500}
//           >
//             Contact
//           </Link>
//         </nav>

//         <div className="hidden md:flex gap-4">
//           <button
//             className="px-6 py-2 rounded-full text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white"
//             onClick={() => navigate("/login")}
//           >
//             Sign in
//           </button>
//           <button
//             className="px-6 py-2 rounded-full text-white bg-indigo-600 hover:bg-white hover:text-indigo-600 border border-indigo-600"
//             onClick={() => navigate("/sign-up")}
//           >
//             Sign up
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-6 pb-4 flex flex-col gap-3">
//           <Link to="home" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="text-[#444444] hover:text-indigo-600">Home</Link>
//           <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="text-[#444444] hover:text-indigo-600">About</Link>
//           <Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsOpen(false)} className="text-[#444444] hover:text-indigo-600">Contact</Link>
//           <button onClick={() => { navigate("/login"); setIsOpen(false); }} className="border border-indigo-600 px-4 py-2 rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white">Sign in</button>
//           <button onClick={() => { navigate("/sign-up"); setIsOpen(false); }} className="bg-indigo-600 px-4 py-2 rounded-full text-white hover:bg-white hover:text-indigo-600 border border-indigo-600">Sign up</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
