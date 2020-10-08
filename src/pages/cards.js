import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardDeck from 'react-bootstrap/CardDeck';

const Cards = () => {
    return (

        <CardDeck className = "design">
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?books" />
                <Card.Body>
                    <Card.Title>NGO 1</Card.Title>
                    <Card.Text>
                        NGO1 DESC: This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?shelter" />
                <Card.Body>
                    <Card.Title>NGO 2</Card.Title>
                    <Card.Text>
                        NGO2 DESC: This card has supporting text below as a natural lead-in to additional
                        content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?clothes" />
                <Card.Body>
                    <Card.Title>NGO3</Card.Title>
                    <Card.Text>
                        NGO3 DESC: This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardDeck>

       
    )
}

export default Cards;