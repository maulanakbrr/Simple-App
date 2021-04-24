import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import axios from 'axios';

import './HomePage.css';

const HomePage = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    const getApi = async () => {
      try {
        const { data } = await axios.get('https://reqres.in/api/users');
        
        setHomeData(data.data);
      } catch (error) {
        console.log(error)
      }
    }
    getApi();
  }, []);
  
  console.log(homeData);

  return (
    <Container className='home-container'>

      <div className='title-box'>
        <h1 className='title'>Simple App</h1>
        <p className='subtitle'>Do you know what is the simplest thing that you have never known? It's the Simple App!</p>
      </div>

      <Row className='simple-what-box'>
        <Col sm={4} md={6} className='simple-img'>
          <Image src={process.env.PUBLIC_URL + '/images/questions.jpg'} fluid/>
        </Col>
        
        <Col sm={8} md={6} className='simple-info'>
          <h4 className='simple-info-title'>What is Simple App?</h4>
          <p className='mb-0 simple-info-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, atque culpa cumque minima quaerat quas officia reiciendis earum sunt sit pariatur excepturi. Eveniet accusamus porro tempora assumenda maxime. Sed, nostrum!</p>
        </Col>
        
      </Row>

      
      <h2 className='my-5 mb-3 team-title'>Meet Our Team!</h2>
      <Row className='mb-5'>
        {
          homeData.map((data) => (
            <Col key={data.id} xl={2} md={4} sm={6} xs={12} className='team-container'>
              <div className='team-box'>
                <div className='my-3 team-img-container'>
                  <Image src={data.avatar} className='team-img'/>
                </div>
                <div className='team-desc'>
                  <p className='team-name'>{`${data.first_name} ${data.last_name}`}</p>
                  <p className='team-email'>{data.email}</p>
                </div>
              </div>
            </Col>
          ))
        }
      </Row>

      <div className='join-container'>
        <div className='join-box'>
          <h4 className='join-title text-center'>Share with Us!</h4>
          <p className='text-center'>Do you want your story published here? Join with us here! </p>
          <div style={{ textAlign: 'center'}}>
            <Button className='join-btn'>Sign In</Button>
          </div>
        </div>
      </div>

      
      
    </Container>
  )
}

export default HomePage
