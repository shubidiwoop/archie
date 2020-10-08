import React from 'react';
import NavigationBar from './navbar';
import '../cssSyling/Home.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Assets/glogin.png';
import HelpCard from './helpcard';
import FooterPage from './footer';


const SignUp = () => {
    return (
        <div>
            <NavigationBar />
            <div className="flex-container designTop">
                <div className="box">
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    NGO SignIn/SignUp!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <img src="../Assets/glogin.png" />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Donor SignIn/SignUp!
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <img src="../Assets/glogin.png" />
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
                <div className="box">
                    <HelpCard />
                </div>
            </div>
            <FooterPage />
        </div>

    )
}

export default SignUp;