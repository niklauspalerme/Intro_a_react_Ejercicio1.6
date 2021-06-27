import React from 'react'

const Botton = ({name, handleClick})=>{
     return (
        <button onClick={handleClick}>{name}</button>
    )

}


export default Botton;