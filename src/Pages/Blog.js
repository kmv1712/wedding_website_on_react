import React, { Component } from 'react'
import { Media, Container, Col, Row, Card, ListGroup } from 'react-bootstrap'


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md ="9">
                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Exercitation consectetur cupidatat nulla exercitation dolor. Consequat duis pariatur pariatur pariatur non incididunt do. Cillum mollit adipisicing sint Lorem ullamco aliqua irure excepteur.
                            </p>

                        </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Exercitation consectetur cupidatat nulla exercitation dolor. Consequat duis pariatur pariatur pariatur non incididunt do. Cillum mollit adipisicing sint Lorem ullamco aliqua irure excepteur.
                            </p>

                        </Media.Body>
                        </Media>

                        <Media className="m-5">
                            <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            />
                        <Media.Body>
                            <h5>Blog post</h5>
                            <p>
                                Exercitation consectetur cupidatat nulla exercitation dolor. Consequat duis pariatur pariatur pariatur non incididunt do. Cillum mollit adipisicing sint Lorem ullamco aliqua irure excepteur.
                            </p>

                        </Media.Body>
                        </Media>
                    </Col>

                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Go</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-5" bg="lite">
                            <Card.Body>
                                <Card.Title>Side widgwt</Card.Title>
                                <Card.Text>
                                    Magna fugiat et sint commodo anim nostrud ut est qui. Mollit excepteur ullamco culpa ullamco amet fugiat. Irure laboris sunt consectetur consectetur ea laborum aliquip laboris nostrud cillum anim laboris aliqua voluptate. Eiusmod et ad aliquip do tempor et. Culpa dolor non laborum do elit ullamco pariatur.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        )
    }
}
