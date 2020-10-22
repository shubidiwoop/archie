import React from 'react';
import { useState } from 'react';
import NavigationBar from './navbar';
import '../cssSyling/Home.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../Assets/glogin.png';
import HelpCard from './helpcard';
import Form from 'react-bootstrap/Form';
import FooterPage from './footer';
import { BrowserRouter, Route, Switch, Link, useHistory } from 'react-router-dom';
import axios from 'axios';

function createCookie(key, value, date) {
    let expiration = new Date(date).toUTCString();
    console.log(expiration);
    let cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("New cookie with key: " + key + " value: " + value + " expiration: " + expiration);
 }




const handleNgoLogin = (event,history) => {
    
    event.preventDefault();
    const email = event.target.email.value;
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    axios.post('http://localhost:5000/ngo/createUser', {
        "emailAddress" : email
    })
    .then(function (response) {
        const eth = response.data.ethAddress;
        console.log("RESPONSE FROM API", eth);
        console.log("RESPONSE FROM API", eth);
        createCookie("email", email, Date.UTC(2021, 10, 1));
        // console.log(event);
        // console.log(window);
  
            history.push("/ngo");
  
    
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE");
    })
    
    
}



const handleDonorLogin = (event,history) => {
    event.preventDefault();
    const email = event.target.email.value;
    console.log(event.target.email.value)
    console.log(event.target.password.value)
    axios.post('http://localhost:5000/ngo/createUser', {
        "emailAddress" : email
    })
    .then(function (response) {
        const eth = response.data.ethAddress;
        console.log("RESPONSE FROM API", eth);
        createCookie("email", email, Date.UTC(2021, 10, 1));
        history.push("/donor");
    
    })
    .catch(function (error) {
        console.log("ERRROR STARTS HERE::\n",error.response.data);
        console.log("\nERROR ENDS HERE");
    })

    
}



const SignUp = () => {
    const history = useHistory();
    // const query = new URLSearchParams(this.props.location.search);
    // console.log(query.token);
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
                                <Form onSubmit = {(event)=>handleNgoLogin(event,history)}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit 
                        </Button>
                        
                    </Form>
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
                                <Form onSubmit = {(event)=>handleDonorLogin(event,history)}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Enter password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">

                            Submit 
                        </Button>
                    </Form>
                    
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