import React from "react";
import { BigHead } from "@bigheads/core";

const getRandomAvatarProps = () => {
  const avatarProps = {
    hat: "none",
    hatColor: "black",
    accessory: "none",
    clothing: "shirt",
    clothingColor: "black",
    graphic: "none",
  };
  return avatarProps;
};

const AvatarDisplay = ({ windowWidth }) => {
  const getAvatar = () => {
    if (windowWidth > 1000) {
      return <BigHead {...getRandomAvatarProps()} />;
    } else if (windowWidth > 700) {
      return <BigHead {...getRandomAvatarProps()} />;
    } else {
      return <BigHead {...getRandomAvatarProps()} />;
    }
  };

  return <div>{getAvatar()}</div>;
};

export default AvatarDisplay;
