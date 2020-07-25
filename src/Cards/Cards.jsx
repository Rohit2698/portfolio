import React, { useState } from "react";
import './Cards.css';
import Model from '../Model/Modal';
const Card = (props) => {
  
  const [show,setShow]=useState(false);
    return (
    <>
      <div className="row">
        <div className="col">
          <div class="card projects">
            <img src={props.img} class="card-img-top" alt="..." style={{width:"100%"}}/>
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <p class="card-text">
                {props.info1}
              </p>
              <button onClick={()=>setShow(true)} class="btn btn-primary">
                Check Out My Work
              </button>
            </div>
          </div>
        </div>
      </div>
      <Model
            title={props.name}
            info2={props.info2}
            lang={props.lang}
            weblink={props.website}
            img={props.img}
          show={show}
          onHide={(()=>setShow(false))}
      />
    </>
  );
};

export default Card;
