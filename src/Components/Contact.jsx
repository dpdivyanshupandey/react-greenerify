// Contact.js

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Contact = () => {
  return (
    <div className='Contact'>
      <h2 >Contact</h2>
      <div class="social">
        
       <div> <FaFacebook /> <a href="https://www.facebook.com/dpdivyanshu.pandey.7/" target="_blank" >Facebook</a></div>
     <div><FaInstagram /> <a href="instagram.com/dpdivyanshupandey/" target="_blank">Instagram</a></div>
     <div><FaLinkedin /><a href="https://www.linkedin.com/in/divyanshu-pandey-59244a203/" target="_blank">Linkedin</a></div>
     <div><FaGithub /><a href="https://github.com/dpdivyanshupandey" target="_blank">Github</a></div>
    </div>

    <div class="mail">
    <div class="email"><MdEmail /><a href="mailto:dpdivyanshupandey@gmail.com" target="_blank">Gmail</a></div>
    
</div>

  <h2 style={{color:"green"}}>Write to Us!</h2>
  <form>
    <label>Name: </label>
    <input/>
    <label>Email: </label>
    <input/>
    <label>Query: </label>
    <input/><br/><br/>
    <button type='submit'>Submit</button>
  </form>
    </div>
  );
}

export default Contact;
