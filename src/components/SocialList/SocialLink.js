import React from 'react'
import { Instagram, LinkedIn, GitHub } from '../../assets/socialIcons.js'

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
