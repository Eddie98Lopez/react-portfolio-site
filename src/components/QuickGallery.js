import React from 'react'
import GalleryThumb from './GalleryThumb'

export const QuickGallery = (props) => {
    const {title,array,link} = props
    return (
        <div>

            <h2>{title}</h2>
            {array.map(item => <GalleryThumb project={item}/>)}
            <span>{link}</span>
            
        </div>
    )
}
