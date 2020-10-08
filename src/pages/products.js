import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button'

const Products = () => {
    return (

        <CardColumns className = "design">
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?books" />
                <Card.Body>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Text>
                        <p>Price: $2</p>
                        <p> Quantity needed: 100</p>
                        Total goal: $200
                    </Card.Text>
                    <Button variant="secondary">Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={60} />
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?shelter" />
                <Card.Body>
                    <Card.Title>Product 2</Card.Title>
                    <Card.Text>
                        <p>Price: $5</p>
                        <p>Quantity needed: 50</p>
                        Total goal: $250
                    </Card.Text>
                    <Button variant="secondary">Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={40} />
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?clothes" />
                <Card.Body>
                    <Card.Title>Product 3</Card.Title>
                    <Card.Text>
                        <p>Price: $10 </p>
                        <p>Quantity needed: 60</p>
                        Total goal: $600
                    </Card.Text>
                    <Button variant="secondary">Edit Product</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={75} />
                </Card.Footer>
                
            </Card>
            <div align="right"><Button variant="primary">Add product</Button></div>
        </CardColumns>
        
       
    )
}

export default Products;