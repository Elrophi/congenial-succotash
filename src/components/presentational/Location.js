import React from "react";
import "../../styles/index.css";

function Location() {
  const API_KEY = process.env.REACT_APP_GOOGLE_API;
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Breakthrough+Chapel+Mombasa`;
  return (
    <div className="w-full">
      <div
        style={{ zIndex: 999 }}
        className="text-2xl xl:text-4xl uppercase py-2 font-roboto text-white font w-4/5 lg:w-1/2 head-section-sm md:head-section-lg bg-primary absolute mt-10 right-0 float-right lg:h-16 h-auto"
      >
        <h1 className="ml-8 font-bold">
          <span className="font-hairline">Location of</span> Breakthrough Chapel
        </h1>
      </div>
      <iframe
        title="Breakthrough Chapel HQ"
        className="w-full"
        // width="600"
        height="450"
        frameBorder="0"
        // style={{ border: 0 }}
        src={mapUrl}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Location;
