import React, { useEffect, useState } from 'react'
import './nav.css'
function Nav() {
    const [show, handleshow]=useState(false);

useEffect(()=>{
window.addEventListener("scroll",()=>{
    if (window.scrollY>100) {
    handleshow(true);
    }else handleshow(false);
})// return()=>{
    //window.removeEventListener("scroll")
// }
},[])



    return (
        <div className={`nav ${show && "nav_black"}`} >
        <img className="netflixlogo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netlfix logo" />
       <img className="navavtarlogo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avtar" />
        </div>
    )
}

export default Nav
