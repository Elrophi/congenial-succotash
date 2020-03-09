import React, { useState, useEffect } from "react";
import "../../../styles/index.css";
import { IoMdMenu } from "react-icons/io";
import Logo from "../../../assets/images/logo.png";
import NavigationLink from "./NavigationLink";

function NavBar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 780px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };
  return (
    <header>
      <nav className="bg-white">
        <ul className="flex items-center lg:h-20 px-4 py-4 lg:py-0 justify-between flex-wrap">
          <NavigationLink location="/">
            <div className="flex items-center">
              <img
                alt="Breakthrough Logo"
                height="55"
                width="55"
                src={Logo}
                loading="lazy"
              />
              <span className="ml-1 text-base lg:text-xl text-primary font-montserrat">
                Breakthrough Chapel <br className="block lg:hidden" />
                International
              </span>
            </div>
          </NavigationLink>
          <button
            onClick={toggleNav}
            className="block lg:hidden cursor-pointer"
          >
            <IoMdMenu />
          </button>
          {(!isSmallScreen || isNavVisible) && (
            <div className="w-full text-primary text-lg lg:items-center lg:w-auto block lg:flex">
              <NavigationLink
                navStyle={
                  "mr-4 my-4 lg:my-0 hover:text-lightBlack font-montserrat transition duration-500 ease-in-out"
                }
                location="/watch-online"
              >
                Watch Online
              </NavigationLink>
              <NavigationLink
                navStyle={
                  "mr-4 my-4 lg:my-0 hover:text-lightBlack font-montserrat transition duration-500 ease-in-out"
                }
                location="/events"
              >
                Events
              </NavigationLink>
              <NavigationLink
                navStyle={
                  "mr-4 my-4 lg:my-0 hover:text-lightBlack font-montserrat transition duration-500 ease-in-out"
                }
                location="/ministries"
              >
                Ministries
              </NavigationLink>
              <NavigationLink
                navStyle={
                  "mr-4 mb-4 lg:mb-0 hover:text-lightBlack font-montserrat transition duration-500 ease-in-out"
                }
                location="/sermons"
              >
                Sermons
              </NavigationLink>
              <NavigationLink
                navStyle={
                  "mr-4 hover:text-lightBlack font-montserrat transition duration-500 ease-in-out"
                }
                location="/give"
              >
                Give
              </NavigationLink>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
