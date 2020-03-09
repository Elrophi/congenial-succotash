import React from "react";
import NavigationLink from "./NavigationLink";
import "../../../styles/index.css";

function MiniBar() {
  return (
    <div className="p-1 bg-primary">
      <ul className="text-xs text-white uppercase flex justify-end">
        <NavigationLink
          navStyle={"mr-2 hover:border-b hover:border-white font-roboto"}
          location="/contact"
        >
          Contact Us
        </NavigationLink>
        <NavigationLink
          navStyle={"hover:border-b hover:border-white font-roboto"}
          location="/account"
        >
          My Account
        </NavigationLink>
      </ul>
    </div>
  );
}

export default MiniBar;
