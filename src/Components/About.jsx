// About.jsx

import React from 'react';

const About = () => {
  return (
    <div style={{backgroundColor:"rgb(192, 234, 234)"}}>
      <h2 style={{color:"green"}}>About Greenerify</h2>
      <div style={{textAlign:"center" , fontWeight:"bold"}}>Greenerify works on behalf of Customers,Companies and Others to plant trees on the name of them.
        Socially aware, Plant lovers, Nature Lover and all others those who want to plant tree but due to lack of Time,Knowledge,Facilities or with 
        any reason not able to plant tree. We,Greenerify is there for them. We will take your responsibilty and plant trees on behalf them with very
        less amount.
      </div>
      <h1 style={{color:"green"}}>Prices for Plantation</h1>
     <ul  style={{fontWeight:"bold", textAlign:"left"}}>
      <li>At initial we charge &#8377; 40 for a Single Plant.</li>
      <li>A mega discount and offers comes periodically.</li>
     </ul>
   <h1 style={{color:"green"}}>How we Work?</h1>
   <div>
   <ul style={{textAlign:"left" , fontWeight:"bold"}}>
    <li>As soon as the amount is received,Greenerify starts the work.</li>
    <li>Based on the amount received, Rs. 40 for a single plant or Total plant*Initial Amount, we take plants.</li>
    <li>Our expert planter will plant the tree at a suitable location.</li>
    <li>The image of planted tree and location with longitude and lattitude will be shared to the User for their proof. </li>
    <li>If they want to see their plant they can follow the longitude and lattitude through map to reach at the location.</li>
    <li>So,Lets make the Globe green.</li>
   </ul>
   </div>
    
    </div>
  );
}

export default About;
