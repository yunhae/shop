import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './pages/productdata';


import About from './pages/About';
import Details from './pages/Details';

import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const navigate = useNavigate()
  const [bests] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=> {navigate('/')}}>SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('about/info')}}>Information</Nav.Link>
            <Nav.Link onClick={()=>{navigate('about/loca')}}>Location</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <Container fluid>
            <img src={process.env.PUBLIC_URL + '/images/visual_main_01.jpg'} alt="visual_img" />
            <h2>BEST 상품</h2>
            <Row>
              {
                bests.map((best, index) => {
                  return(
                    <Link to={`details/${index}`}>
                      <Col>
                        <img src={best.image} alt="" style={{width: 280}} />
                        <h4>{best.title}</h4>
                        <p>{best.desc}</p>
                        <p>{best.price}</p>
                      </Col>
                    </Link>
                  )
                })
              }
            </Row>
          </Container>
        } />
        <Route path='about' element={<About />}>
          <Route path='info' element={<div>Information</div>} />
          <Route path='loca' element={<div>Location</div>} />
        </Route>
        <Route path='details/:id' element={<Details bests={bests}/>}  />
      </Routes>
    </div>
  );
}

export default App;
