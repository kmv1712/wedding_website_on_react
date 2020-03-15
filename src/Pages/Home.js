import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox/CarouselBox';
import { Container, CardDeck, Card, Button } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />

            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck>
                    <Card bg="info" text="primary">
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Deverlopers</Card.Title>
                            <Card.Text>
                                Amet duis fugiat consequat Lorem in duis occaecat anim cillum pariatur.
                                Est anim duis cillum enim id dolore exercitation esse cillum veniam aliqua dolor officia.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                        <Card.Body>
                            <Card.Title>Deverlopers</Card.Title>
                            <Card.Text>
                                Amet duis fugiat consequat Lorem in duis occaecat anim cillum pariatur.
                                Est anim duis cillum enim id dolore exercitation esse cillum veniam aliqua dolor officia.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/697243/pexels-photo-697243.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 "
                        />
                        <Card.Body>
                            <Card.Title>Deverlopers</Card.Title>
                            <Card.Text>
                                Amet duis fugiat consequat Lorem in duis occaecat anim cillum pariatur.
                                Est anim duis cillum enim id dolore exercitation esse cillum veniam aliqua dolor officia.
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}
