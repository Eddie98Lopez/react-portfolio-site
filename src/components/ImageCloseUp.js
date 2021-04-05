import React from 'react'
import {useParams,useHistory } from 'react-router'


const ImageCloseUp = (props) => {

    
    const {push} = useHistory()
    const params = useParams()
    console.log(params)
    let id = Number(params.id)
        console.log(id)

    const next = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        push(`../${params.collection}/${id+1}`)
    }

    return(
        <div>
            Hello world
            <button onClick={next}>next</button>
        </div>
    )
}

export default ImageCloseUp