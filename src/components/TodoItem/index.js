import React from "react"
import {Button} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Col, Row} from "react-bootstrap";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
        <div>{this.props.name}</div>
    );
    }
}

export default TodoItem;