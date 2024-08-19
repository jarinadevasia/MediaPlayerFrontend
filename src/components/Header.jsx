import React from 'react'

// import the code from react boostrap page from online

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand style={{ color: "white" }}>
            <Link to='/' style={{textDecoration:"none",color:'white'}}>
              <i class="fa-solid fa-video me-3 text-warning"></i>
              Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header