import React from 'react';
import {Col, Container, Jumbotron, Row} from 'react-bootstrap';

const marked = require("marked");


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            markdown: ""
        };
    }

    updateMarkdown(markdown) {
        this.setState({markdown});
    }


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
                            <textarea className="input" style={this.inputStyle} value={this.state.markdown}
                                      onChange={e => this.updateMarkdown(e.target.value)}/>
                        </div>
                    </Col>
                    <Col md='6'>
                        <p className="lead my-4 text-center">Preview</p>
                        <div className="rounded" style={this.outputStyle}
                             dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
