import React from "react";
import SocialLink from "./SocialLink";
import SocialWrapper from "./SocialWrapper";

const SocialList = (props) => {
  const { list } = props;

  return (
    <SocialWrapper>
      {list.map((link) => (
        <SocialLink link={link} />
      ))}
    </SocialWrapper>
  );
};

export default SocialList;
