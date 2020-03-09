import React from "react";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="w-full bg-lightBlack flex flex-col items-center">
      <div className="text-center px-8 pt-8">
        <span
          style={{ color: "#5A5A5A" }}
          className="font-roboto text-xl lg:text-3xl font-bold uppercase"
        >
          Thanks for visiting Breakthrough Chapel International
        </span>
      </div>
      <div className="text-center py-2 lg:py-0 px-8">
        <span className="font-roboto text-xl text-grey">
          To receive up to date news and messages from Breakthrough Chapel
          Int'l, sign up for our newsletter.{" "}
        </span>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center py-6 px-8">
        <div
          style={{ borderColor: "#5A5A5A" }}
          className="w-full lg:w-1/2 rounded-lg border-2 flex"
        >
          <input
            style={{ borderColor: "#5A5A5A" }}
            className="truncate outline-none text-grey placeholder-grey bg-transparent font-roboto w-2/3 p-4 border-r-2  text-sm lg:text-xl"
            type="email"
            placeholder="Enter your e-mail address"
            required
          />
          <button className="px-6 w-1/3 text-grey font-roboto text-sm lg:text-xl">
            Sign Up
          </button>
        </div>
      </div>
      <div>
        <img src={Logo} height={200} width={200} alt="Logo" loading="lazy" />
      </div>
      <div style={{ backgroundColor: "#191616" }} className="mt-12 flex justify-center w-full p-4">
        <span className="text-grey font-roboto text-lg">
          © {new Date().getFullYear()} Copyright - Breakthrough Chapel
          International
        </span>
      </div>
    </div>
  );
}

export default Footer;
