import React from 'react';
import Card from 'react-bootstrap/Card';
import '../cssSyling/Home.css';
import CardColumns from 'react-bootstrap/CardColumns';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

let goal = [0];
const ProductsDonor = () => {
    const [payD, setPayD] = useState(
        {
            "bar": 0
        }
    );


    function readCookie(name) {
        let key = name + "=";
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
                console.log(cookie);
            }
            if (cookie.indexOf(key) === 0) {
                console.log(cookie.substring(key.length, cookie.length));
                return cookie.substring(key.length, cookie.length);
            }
        }
        return null;
    }
    let now1 = 0;
    
    const now2 = 0;
    const now3 = 0;
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);
    const handlePayment = (event) => {
        event.preventDefault();
        const amount = event.target.addmoney.value;
        const emaila = readCookie("email");
        axios.post('https://ngo-server.herokuapp.com/erc20/mint', {
            "emailAddress": emaila,
            "amount": amount
        })
            .then(function (response) {
                console.log("minted", response);
                window.alert("You can monitor your transaction at goerli.etherscan.io/tx/"+response.data.data[0].txHash);
               
            })
            .catch(function (error) {
                console.log("ERRROR STARTS HERE::\n", error.response.data);
                console.log("\nERROR ENDS HERE");
                alert("error in adding money");
            })
            handleClose1();
    }
    const payToNgo = (event) => {
        event.preventDefault();
        const amount = event.target.payment.value;
        const emaila = readCookie("email");
        axios.post('https://ngo-server.herokuapp.com/ngo/donate', {
            "UseremailAddress": emaila,
            "NgoemailAddress": 'roshan22897@gmail.com',
            "amountPayed": amount
        })
            .then(function (response) {
                console.log("donate", response);
                window.alert("You can monitor your transaction at goerli.etherscan.io/tx/"+response.data.data[0].txHash);
                goal.push( (amount/2));
                console.log(goal);
                let s = 0;
                let  i;
                for(i=0 ; i<goal.length ; i++){
                    s=s+goal[i];
                }
                console.log(s);
                if(s == 100){
                    alert('Congrats!! The product will be delivered to the respective NGO.Find the tracking detail over here.->')
                }
                setPayD({
                    "bar":s
                })
            })
            .catch(function (error) {
                console.log("ERRROR STARTS HERE::\n", error.response.data);
                console.log("\nERROR ENDS HERE");
            })
            
            handleClose();
    }
    const showBalance = (event) => {
        event.preventDefault();
        // const amount = event.target.addmoney.value;
        const emaila = readCookie("email");
        axios.post('https://ngo-server.herokuapp.com/erc20/balanceof', {
            "emailAddress": String(emaila)
        })
            .then(function (response) {
                console.log("minted", response);
                window.alert("Your balance is "+ response.data.data[0].uint256);
            })
            .catch(function (error) {
                console.log("ERRROR STARTS HERE::\n", error.response.data);
                console.log("\nERROR ENDS HERE");
                alert("error in adding money");
            })
    }
    function readCookie(name) {
        let key = name + "=";
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
            if (cookie.indexOf(key) === 0) {
                return cookie.substring(key.length, cookie.length);
            }
        }
        return null;
    }
    // const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
    return (
        <CardColumns className="design">
            
            
            <Card>
            <div><Button variant="info" onClick={handleShow1}>Add money To the wallet</Button></div>
            <br />
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?books" />
                <Card.Body>
                    <Card.Title>Product 1</Card.Title>
                    <Card.Text>
                        <p>Price: $2</p>
                        <p> Quantity needed: 100</p>
                        Total goal: $200
                    </Card.Text>
                    <Button variant="success" onClick={handleShow}>Donate</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={payD.bar} label={`${payD.bar}%`} />
                </Card.Footer>
            </Card>
            <Card>
            <div><Button variant="info" onClick={showBalance}>Show balance</Button></div>
            <br />
                <Card.Img variant="top" src="https://source.unsplash.com/800x800/?shelter" />
                <Card.Body>
                    <Card.Title>Product 2</Card.Title>
                    <Card.Text>
                        <p>Price: $5</p>
                        <p>Quantity needed: 50</p>
                        Total goal: $250
                    </Card.Text>
                    <Button variant="success" onClick={handleShow}>Donate</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={now2} label={`${now2}%`} />
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
                    <Button variant="success" onClick={handleShow}>Donate</Button>
                </Card.Body>
                <Card.Footer>
                    <ProgressBar now={now3+20} label={`${now3+20}%`} />
                </Card.Footer>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Donate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={payToNgo}>
                        <Form.Group controlId="payment">
                            <Form.Label>Woohoo, how much do you want to donate for a good cause? </Form.Label>
                            <Form.Control required type="number" placeholder="Enter donation amount" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Pay Amount
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Mint Money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handlePayment}>
                        <Form.Group controlId="addmoney">
                            <Form.Label>How much do you want to add to your account? </Form.Label>
                            <Form.Control required type="number" placeholder="Enter amount" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add money
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </CardColumns>
    )
}
export default ProductsDonor;
