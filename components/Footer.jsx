import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillMail} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Audio Heads All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillMail/>
      </p>
    </div>
  )
}

export default Footer