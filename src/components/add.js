import React, { Component } from "react";
import { connect } from "react-redux";
import "./add.css";

class Add extends Component {
    render() {
        return ( <
            button onClick = { this.props.onAge } className = "myButton" > Click < /button>
        );
    }

}

const mapStateToProps = state => {

    return {
        age: state.age.age
    };

};

const mapDispatchToProps = dispatch => {
    return {
        onAge: () => dispatch({ type: "RANDOM" })
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
