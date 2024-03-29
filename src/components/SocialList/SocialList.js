import React from "react";
import SocialLink from "./SocialLink";
import SocialWrapper from "./SocialWrapper";

const SocialList = (props) => {
  const { list } = props;

  return (
    <SocialWrapper {...props} >
      {list.map((link) => (
        <SocialLink link={link} key={link.type} />
      ))}
    </SocialWrapper>
  );
};

export default SocialList;
