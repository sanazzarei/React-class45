import React from "react";
import AvatarDisplay from "./AvatarDisplay";
import useWindowSize from "./WindowSizeHook";

const PersonByWindowSize = () => {
  const windowWidth = useWindowSize();

  return (
    <div>
      <h1>Person by Window Size</h1>
      <AvatarDisplay windowWidth={windowWidth} />
    </div>
  );
};

export default PersonByWindowSize;
