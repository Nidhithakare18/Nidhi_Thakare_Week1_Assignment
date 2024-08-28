import React from 'react';
import"./Banner.css";
import Card from 'react-bootstrap/Card';

const Experience = () => {
  return (
    <div className='home'>
    <Card style={{height:"96.6vh", display:"flex", alignItems:"center", justifyContent:"center",}}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.v9bjzfYekMf_D4u2TVk6nAHaD7?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
     <Card.Body style={{textAlign:"center", fontFamily:"cursive" }}>
        <Card.Title>" Indvibe Infotech Private Limited</Card.Title>
        <Card.Text>
          4 Month Internship "<br></br>HTML, CSS, Javascript, React js.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
)
};

export default Experience;
