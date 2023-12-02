import React from 'react'

const Button = (props) => {
  return (
    <>
        <div onClick={props.function} style={{ padding:'10px',color:'white',cursor:'pointer' , backgroundColor:'#037171'}}>

            {props.name}
        </div>
    
    </>
  )
}

export default Button