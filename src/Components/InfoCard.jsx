// HorizontalCardList.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const InfoCard = () => {
  return (
    <div className="d-flex">
      
      <div className="card" style={{ width: '18rem', margin: "15px 0 15px 180px" }}>
        <img src="https://dpdivyanshupandey7800.netlify.app/img/main-img.png" className="card-img-top" alt="Card Image 1" />
        <div className="card-body">
          <h5 className="card-title">Performer Top 1</h5>
          <p className="card-text"><span style={{color:"green", fontFamily:"monospace"}}>Divyanshu Pandey</span> He had paid us more than others to plant on behalf of him.He top the leaderboard. </p>
          <a href="https://dpdivyanshupandey7800.netlify.app/" target='blank' className="btn btn-primary">Know more</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem',  margin: "15px 0 15px 130px" }}>
        <img src="https://plus.unsplash.com/premium_photo-1683134080778-aaa686741d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="Card Image 2" />
        <div className="card-body">
          <h5 className="card-title">Performer Top 2</h5>
          <p className="card-text"><span style={{color:"green", fontFamily:"monospace"}}> Miss Helina</span> A plant lover can be seen everywhere. Second place love to see you.</p>
          <a href="#" className="btn btn-primary">Know more</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', margin: "15px 0 15px 130px" }}>
        <img src="https://images.deccanherald.com/deccanherald%2F2023-10%2F40a4bb11-75b0-4ced-9670-9a2766c90246%2FMSD_Hairdo.jpg?rect=373%2C0%2C540%2C720" className="card-img-top" alt="Card Image 2" />
        <div className="card-body">
          <h5 className="card-title">Performer Top 3</h5>
          <p className="card-text"><span style={{color:"green", fontFamily:"monospace"}}>MS Dhoni</span> Appreciate your thought to make our globe green.You made a impact from third place.</p>
          <a href="#" className="btn btn-primary">Know more</a>
        </div>
      </div>

      

      {/* Add more cards as needed */}
    </div>
  );
};

export default InfoCard;
