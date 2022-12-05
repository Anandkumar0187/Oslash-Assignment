import React from 'react';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <p><AiOutlineQuestionCircle/>&nbsp;&nbsp;learn about sharing</p>
      <p><FaLink/>&nbsp;&nbsp;Copy link</p>
    </div>
  )
}

export default Footer
