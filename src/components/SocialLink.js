import React from 'react'
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import GitHub from "../assets/GitHub";

const SocialLink = (props) => {
    const {type, href} = props.link
    return (
        <a href={href} target="_blank" rel='noreferrer'>
        {type==='linkedIn' && <LinkedIn className="svg" />}
        {type==='instagram' && <Instagram className="svg" />}
        {type==='github' && <GitHub className="svg" />}
      </a>
    )
}

export default SocialLink
