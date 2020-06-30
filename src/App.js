import React from 'react';
import './App.css';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron variant="light">
                    <Container className="text-center">
                        <h1>Markdown Previewer</h1>
                    </Container>
                </Jumbotron>
                <Row className='m-0'>
                    <Col md='6' className='text-center'>
                        <p className="lead">Markdown Input</p>
                    </Col>
                    <Col md='6' className='text-center'>
                        <p className="lead">Preview</p>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default App;
