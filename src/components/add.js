import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./person.js";
import "./add.css";
import * as actionTypes from "../reducers/actions.js";

///redux_ex1/src/reducers/actions.js
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
        onAge: () => dispatch({ type: actionTypes.RANDOM }),
        onDelete: (id) => dispatch({ type: actionTypes.DELETE, id: id })
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
