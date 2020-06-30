import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';

class App extends React.Component {
    inputStyle = {
        width: "100%",
        height: "50vh",
        padding: "10px"
    };

    outputStyle = {
        width: "100%",
        height: "50vh",
        backgroundColor: "#DCDCDC",
        padding: "10px"
    };

    render() {
        return (
            <div>
                <Jumbotron variant="light" className="mb-0">
                    <Container className="text-center">
                        <h1>Markdown Previewer</h1>
                    </Container>
                </Jumbotron>
                <Row className='m-0'>
                    <Col md='6' className='text-center'>
                        <p className="lead my-4">Markdown Input</p>
                        <div className="mark-input">
                            <textarea className="input" style={this.inputStyle}/>
                        </div>
                    </Col>
                    <Col md='6' className='text-center'>
                        <p className="lead my-4">Preview</p>
                        <div className="rounded" style={this.outputStyle}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
