import React from 'react'

const ImageThumb = (props) => {

    const {image} = props
    console.log(image)

    return(
        <div key={image.id} className='imgWrapper'>

            <div className='overlay'></div>

            <img src={image.src} alt={image.alt}/>

        </div>
    )
}
export default ImageThumb