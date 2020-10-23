import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';


const Cards = () => {
    return (

        <CardColumns className = "design">
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?birds" />
                <Card.Body>
                    <Card.Title>Bird Rescue</Card.Title>
                    <Card.Text>
                        Bird rescue helps birds commonly kept as indoor pets by rescuing, rehabilitating (physically and behaviorally), and re-homing them. Most of these rescued birds come to us injured, abused, or neglected, or are very ill. We usually care for about 500 birds at a time, incurring veterinary bills of $30,000-$40,000 monthly. This project helps pay for those expenses.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?poor" />
                <Card.Body>
                    <Card.Title>Poverity</Card.Title>
                    <Card.Text>
                        Help the poor is currently fighting poverty in developing countries by taking on issues of inequality, discrimination and unequal access to resources. The organization provides assistance during humanitarian crises.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?stationary" />
                <Card.Body>
                    <Card.Title>Educate</Card.Title>
                    <Card.Text>
                        Educate is the leading voice for improving college and career readiness. By convening states and leaders, providing technical assistance to states, conducting research, and offering advocacy, communications, and outreach support, Educate has transformed the concept of college and career readiness for all students form a radical concept to a national priority.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <div align="right"><Button variant="primary">View all NGOs</Button></div>
        </CardColumns>

       
    )
}

export default Cards;