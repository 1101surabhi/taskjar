import React from "react";
import UI_IMG from "../../assets/images/auth-img.png";
import TaskjarLogo from "../../assets/graphics/taskjar_logo_icon.svg";
const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex gap-4">
          <img src={TaskjarLogo} alt="Taskjar Logo" />
          <h2 className="text-lg font-medium text-black">TaskJar</h2>
        </div>

        {children}
      </div>

      <div className="hidden md:flex w-[40vw] h-screen items-center justify-center bg-blue-400 overflow-hidden p-8">
        <img
          src={UI_IMG}
          alt="Authentication Illustration"
          className="w-64 lg:w-[90%]"
        />
      </div>
    </div>
  );
};
export default AuthLayout;
