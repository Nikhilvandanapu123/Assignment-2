import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Short = "Sai Nikhil Vandanapu";
const Long =
  "Hi Guys! This is Nikhil, I am pursing my masters at university at albany. I came to USA for Spring Semester, this is a New Experience for me Altogether, since i have been working in Infosys before coming here . My Strengths are Hardworking and leadership qualities.";

function App() {
  return (
  <div>
    <Navbar />
    <Container fluid="md">
      <Row>
          <Col xs={3}>
          <img src={require("./img.jpeg")} width="300" height="300" class="d-inline-block align-top" alt="" />
          </Col>
          <Col >
          <p className="Mynamefont">{Short}</p>
          <p>{Long}</p>
          </Col>
      </Row>
    </Container>    
  </div>
  );
}

export default App;
