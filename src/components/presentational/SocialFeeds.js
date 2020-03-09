import React from "react";
import "../../styles/index.css";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { FacebookProvider, Page } from "react-facebook";
import InstagramEmbed from "react-instagram-embed";

function SocialFeeds() {
  const appID = process.env.REACT_FACEBOOK_APPID;
  return (
    <div className="w-full py-8 pb-32 flex flex-col">
      <div className="flex justify-end my-12">
        <div className=" bg-primary head-section-sm flex items-center md:head-section-lg w-11/12 py-2 h-auto lg:h-16">
          <span className="ml-8 font-roboto font-hairline text-white text-2xl xl:text-4xl uppercase">
            Connect with{" "}
            <span className="font-bold">Breakthrough Chapel International</span>
          </span>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row items-center lg:items-start">
        <div className="w-11/12 xl:w-1/4 bg-lightGrey py-6 px-4 mb-4 lg:mb-0 mr-0 lg:mr-8 rounded-lg">
          <div className="flex items-center text-primary text-3xl py-2">
            <FaTwitter />
            <span className="px-3 font-roboto">Twitter</span>
          </div>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="breakthrough254"
            options={{ height: 450 }}
          />
        </div>
        <div className="w-11/12 xl:w-1/4 bg-lightGrey  py-6 px-4 mb-4 lg:mb-0 mr-0 lg:mr-8 rounded-lg">
          <div className="flex items-center text-primary text-3xl py-2">
            <FaFacebookSquare />
            <span className="px-3 font-roboto">Facebook</span>
          </div>
         <div>
            <FacebookProvider appId={{ appID }}>
              <Page
                href="https://www.facebook.com/breakthroughchapel254/"
                tabs="timeline"
              />
            </FacebookProvider>
         </div>
        </div>
        <div className="flex flex-col lg:flex-wrap w-11/12 xl:w-1/4 bg-lightGrey py-6 px-4 rounded-lg">
          <div className="flex items-center text-primary text-3xl py-2">
            <FaInstagram />
            <span className="px-3 font-roboto"> Instagram</span>
          </div>
          <div>
            <InstagramEmbed
              url="https://www.instagram.com/p/B83h181HZ7i/"
              maxWidth={undefined}
              hideCaption={true}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialFeeds;
