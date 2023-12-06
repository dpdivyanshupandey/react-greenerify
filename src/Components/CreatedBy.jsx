import 'bootstrap/dist/css/bootstrap.min.css';

function CreatedBy(){
    return (
        <>
        <div style={{backgroundColor:"rgb(192, 234, 234)"}}>
        <h1 style={{color:"green"}}>Greenerify Development team</h1>
        <p>It is solely developed by <span style={{color:"red"}}>Divyanshu Pandey</span></p>
        <img src="https://dpdivyanshupandey7800.netlify.app/img/main-img.png" height="200px"/>
       <p> <span style={{color:"red", fontWeight:"bold"}}>Divyanshu Pandey</span> is a Computer Science and Engineering graduate. He graduated from Institute of Engineering and Technology,Agra in 2023.
        He has professional and practical knowledge of Front-end Development and Software Engineering. To know more about him Click on 'Know More'</p> 
        <a href="https://dpdivyanshupandey7800.netlify.app" target='blank' className="btn btn-primary">Know More</a>
        </div>
        </>
    )
}

export default CreatedBy;