import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./person.js";
import "./add.css";

class Add extends Component {
    render() {
        return (
            <div>
            <button onClick = { this.props.onAge } className = "myButton" > Click </button>
            <ul>
               {this.props.result.map(result=><Person clicked={()=>this.props.onDelete(result.id)} key={result.id} age={result.age}/>)}
               
            </ul>
            </div>
        );
    }

}

const mapStateToProps = state => {

    return {
        age: state.age,
        result: state.result
    };

};

const mapDispatchToProps = dispatch => {
    return {
        onAge: () => dispatch({ type: "RANDOM" }),
        onDelete: (id) => dispatch({ type: "DELETE", id: id })
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
