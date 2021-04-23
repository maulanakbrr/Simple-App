import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import ProfileData from './ProfileData';

import './ProfilePage.css';

const ProfilePage = () => {

  const { workExperience, organizationExperience: org } = ProfileData;

  return (
    <Container className='profile-container'>
      
      <Row className='pt-5 mb-5'>
        <Col md={3} sm={6} xs={12} className='profile-img-container'>
          <Image src={process.env.PUBLIC_URL + '/images/profile.jpg'} rounded fluid className='profile-img'/>
        </Col>

        <Col md={9} sm={6} xs={12} className='profile-desc'>
          <h2 className='profile-title'>Akbar Maulana</h2>
          <h5 className='text-primary profile-job'>Frontend Developer</h5>
          <p className='mt-2 mb-0 text-justify profile-desc'>Recent bachelor's degree recipient with a background in information technology. I have a good adaptability that makes me can live in new surrounding. Over 2 years of experience working on freelance web developer and skilled in HTML, CSS and JavaScript.</p>
        </Col>
      </Row>

      <hr className='hr'/>

      <Row className='my-5'>
        <Col lg={3} md={4} xs={12}>
          <Row>
            <Col md={12} sm={6} xs={12} className='mb-4'>
              <h6>Contact</h6>
              <div>
                <div>
                  <i class="far fa-envelope"></i>
                  <span className='contact-info'> amaulanaa995@gmail.com</span>
                </div>

                <div>
                  <i class="fas fa-phone-square-alt"></i>
                  <span className='contact-info'> (+62) 822 9910 0294</span>
                </div>

                <div>
                  <i class="fab fa-github-square"></i>
                  <span className='contact-info'> <a href="https://github.com/maulanakbrr" target="_blank" rel="noopener noreferrer">github.com/maulanakbrr</a></span>
                </div>

                <div>
                  <i class="fas fa-globe"></i>
                  <span className='contact-info'> <a href="https://mlbr.herokuapp.com" target="_blank" rel="noopener noreferrer">mlbr.herokuapp.com</a></span>
                </div>

                <div>
                  <i class="fab fa-linkedin"></i>
                  <span className='contact-info'> <a href="https://www.linkedin.com/in/amaulanaa/" target="_blank" rel="noopener noreferrer">linkedin.com/in/amaulanaa</a></span>
                </div>
              </div>
            </Col>

            <Col md={12} sm={6} xs={12} className='mb-4'>
              <h6>Education</h6>
              <p className='edu-degree'>Bachelor Degree of Informatics Engineering</p>
              <p className='edu-place'>Telkom University | Aug 2013 - Jan 2021</p>
              <p className='edu-gpa'>GPA: 3.00/4.00</p>
            </Col>
            
            <Col md={12} sm={6} xs={12} className='mb-4'>
              <h6>Skills</h6>
              
              <div>
                <p className='skill-title'>Frontend Skills</p>
                <p className='skill-name'>HTML, CSS, JavaScript, Sass, Bootstrap, Node.js, React, Redux, Git, npm</p>
              </div>

              <div>
              <p className='skill-title'>Design</p>
                <p className='skill-name'>Adobe Photoshop, Adobe Premiere</p>
              </div>
            </Col>

            <Col md={12} sm={6} xs={12} className='mb-4'>
              <h6>Certificates</h6>
              <p className='certi-name'>Cambridge Certification Authority - JavaScript Level 1 | Feb 2018</p>
              <p className='certi-name'>Responsive Web Design Certification from freecodecamp.org | Sep 2020</p>
            </Col>

          </Row>
        </Col>

        

        <Col lg={9} md={8} xs={12}>
          <hr className='hr-new'/>
          <h4 className='mb-3 work-org-head'>Work Experience</h4>
          <Row className='mb-5'>
            {
              workExperience.map((work) => (
                <Col key={work.job} xs={12} className='mb-3 '>
                  <div className='p-3 work-organizational-section'>
                    <h6>{work.job}</h6>
                    <p className='text-primary mb-2'>{`${work.employer} | ${work.duration}`}</p>
                    <p className='text-justify mb-0'>{work.description}</p>
                  </div>
                </Col>
              ))
            }
          </Row>

          <hr className='hr-new-2'/>

          <h4 className='mb-3 work-org-head'>Organizational Experience</h4>
          <Row className='mb-5'>
            <Col xs={12}>
              <div className='p-3 work-organizational-section'>
                <h6>{org.position}</h6>
                <p className='text-primary mb-2'>{`${org.event} | ${org.time}`}</p>
                <p className='text-justify mb-0'>{org.description}</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      
    </Container>
  )
}

export default ProfilePage
