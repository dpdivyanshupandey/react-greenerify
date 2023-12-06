// Home.jsx

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='Home-Intro'>
      <p>Ever wondered,What is Greenerify?</p>
      <h4>The importance of Greenery is profound and multifaceted, 
        playing a critical role in sustaining life and maintaining a balanced ecosystem.
       It has multiple highlighted significance i.e, Oxygen Production,Carbon dioxide Absorption,Biodiversity Support,Water Regulation,Soil
        Conservation,Aesthetic and Psychological Benefits,Medicinal Resources,Food Production,Economic Importance,Global Climate Regulation and many more...
      </h4>
      </div>
       <h1 className='Home-fact'>Total Plantation Done - <span style={{color:'green'}}>0+</span></h1>

      <div style={{backgroundColor:"rgb(192, 234, 234)" }}>
        <h1 style={{color:"green"}}>Want to Plant?</h1>
        <h3>Scan this QR Code given below to pay. And upload the Payment screenshot for verification.</h3>
        Scan this QR code:
        <img src = "https://static.wikia.nocookie.net/def0a8e5-3ef1-4842-aa4b-f34ac01b8aee/scale-to-width/755" height= "300px"/>
        <form enctype="multipart/form-data">
        <label for="file">Choose a file:</label>
        <input type="file" id="file" name="file" accept=".txt, .pdf, .docx , .jpg , .jpeg , .png" />
        <button type="submit">Upload</button>
    </form>
      </div>
      </>
  );
}

export default Home;
