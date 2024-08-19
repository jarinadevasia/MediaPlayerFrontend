import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landingpage() {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-evenly w-100'>
        <Row>
          <Col>
            <h3 className='textstyle'>Welcome To <span className='text-warning'>Media Player</span></h3>
            <p className='textstyle' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugit repudiandae autem impedit eligendi, nam assumenda vel, rem ab aliquid officiis facilis alias perspiciatis eum voluptatum. Consequuntur necessitatibus sunt sint. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, ut iusto unde dolores eos perspiciatis assumenda recusandae, voluptatibus, inventore at aut eaque adipisci. Libero quaerat quo, dicta animi molestias autem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nobis, voluptatibus voluptate non aliquam corporis maxime suscipit, praesentium, quo quia qui autem architecto iste odit accusantium vitae. Cupiditate, deleniti ad?</p>
            <Link to='/home'>
              <button className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
          </Col>
        </Row>
      </Container>
      <div className="container">
        <h3 className='textstyle'>Features</h3>
        <div className="cards d-flex align-items-center justify-content-evenly mt-5 mb-5">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textstyle'>Card Title</Card.Title>
              <Card.Text className='textstyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textstyle'>Card Title</Card.Title>
              <Card.Text className='textstyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body className='bg-dark'>
              <Card.Title className='textstyle'>Card Title</Card.Title>
              <Card.Text className='textstyle'>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5">
        <Row>
          <Col>
          <h3 className='textstyle mb-3'>Simple and Powerfull</h3>
          <p className='textstyle' style={{textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Eveything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus quod quas maxime. At eaque, dignissimos ratione unde, deserunt temporibus est rerum eius, nihil dicta architecto neque officiis voluptate expedita.</p>
          <p className='textstyle' style={{textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Eveything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus quod quas maxime. At eaque, dignissimos ratione unde, deserunt temporibus est rerum eius, nihil dicta architecto neque officiis voluptate expedita.</p>
          <p className='textstyle' style={{textAlign: "justify" }}><span className='fs-5 fw-bolder'>Play Eveything: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatibus quod quas maxime. At eaque, dignissimos ratione unde, deserunt temporibus est rerum eius, nihil dicta architecto neque officiis voluptate expedita.</p>
          </Col>
          <Col>
          <div className='mt-5'>
          <iframe width="600" height="350" src="https://www.youtube.com/embed/XNWlrWbR_a8?si=r--hsnG_FPNLhs8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Landingpage