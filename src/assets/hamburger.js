import React from 'react'

const Hamburger = (props) => {
    return (
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="29" viewBox="0 0 40 29" {...props} id='hamburger'>
  <g id="Group_1" data-name="Group 1" transform="translate(-218.024 -360.5)">
    <rect id="Rectangle_9" data-name="Rectangle 9" width="40" height="7" rx="3.5" transform="translate(218.024 360.5)" fill={props.fill}/>
    <rect id="Rectangle_10" data-name="Rectangle 10" width="40" height="7" rx="3.5" transform="translate(218.024 371.5)" fill={props.fill}/>
    <rect id="Rectangle_11" data-name="Rectangle 11" width="40" height="7" rx="3.5" transform="translate(218.024 382.5)" fill={props.fill}/>
  </g>
</svg>


    )
}

export default Hamburger
