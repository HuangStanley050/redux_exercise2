import React from "react";
import "./person.css";

const Person = (props) => {
        return (
                <div className = "card" onClick = {props.clicked} >
                <h1>Stanley</h1> 
                <h3> Age: { props.age } </h3> 
        </div >
        );
}

export default Person;
