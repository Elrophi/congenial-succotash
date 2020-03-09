import React from "react";
import SocialFeed from './SocialFeeds';
import Location from './Location';
import HomeCarousel from './HomeCarousel';
import "../../styles/index.css";

function Home() {
  return (
    <div>
      <HomeCarousel />
      <SocialFeed/>
      <Location />
    </div>
  );
}

export default Home;
