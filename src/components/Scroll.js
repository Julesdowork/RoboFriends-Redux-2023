import React from "react";

const Scroll = (props) => {
  return (
    <div className="mt3" style={{overflowY: 'scroll', border: '5px solid #088FFE', height: '800px'}}>
      {props.children}
    </div>
  )
}

export default Scroll;