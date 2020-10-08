import React from "react";
import '../cssSyling/Home.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const NgoFooter = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 footerD">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Ngo Name</h5>
            <p>
              Ngo Address: 191/3, Grand Truck Road, Mississauga, France - 110034
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Help</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Archie </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default NgoFooter;