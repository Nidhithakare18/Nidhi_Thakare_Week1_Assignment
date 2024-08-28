import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Education = () => {
  return (
  <div>
      
    <CardGroup className='home' style={{height:"96.6vh", display:"flex", alignItems:"center", justifyContent:"center"}}>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.CQVs7KEhK74Noi8duyONcQHaES?w=273&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></Card.Img>
        <Card.Body style={{fontFamily:"cursive"}}>
        <Card.Title>Post Graduation (2021-2023) </Card.Title>
          <Card.Text>
           Medicaps University Indore
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.9PJtIi5UKoIS8zz6sQSMhQAAAA?w=284&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <Card.Body style={{fontFamily:"cursive"}}>
        <Card.Title>Graduation (2017-2020) </Card.Title>
          <Card.Text>
           Medicaps University Indore
          </Card.Text>
        </Card.Body>
        </Card>
    </CardGroup>

  </div>
  )
};

export default Education;
