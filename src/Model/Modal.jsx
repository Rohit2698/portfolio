import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import './Modal.css'
const Model = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title} 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm tag">
               <a href={props.weblink}> <img
                  className="img"
                  src={props.img}
                  alt="image"
                /></a>
              </div>
              <div className="col-sm overview">
                <span className="overView">OverView</span>
                <br />
                {props.info2}
                <a href={props.weblink}>{props.title}</a>
              </div>
            </div>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
