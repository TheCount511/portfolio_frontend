import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsLinkedin />
      </div>
    </div>
  );
};

export default SocialMedia;
