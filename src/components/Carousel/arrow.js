import React from 'react'

const Arrow = (props) => {
  const {right} = props

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22.671" height="29.026" viewBox="0 0 22.671 29.026" >
  <path id="Path_284" data-name="Path 284" d="M82.418,477.563l-16.973,12.5,16.973,12.5"  transform='translate(-61.23 -475.55)' fill="none" stroke={props.fill || "#1a3e75"} strokeWidth={props.strokeWidth || '5'}/>
</svg>

  )
}

export default Arrow