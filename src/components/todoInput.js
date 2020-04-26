import React from 'react'
import {Col, Row} from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TodoItem from "./TodoItem";

function getTodoItems(itemArray){
    const todoItems = this.state.items.map(item => <div className={'mb-2'}><TodoItem name={item.name}/></div>)
    if (itemArray.length){
        return todoItems
    }
}

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    handleChange(event){
        const text = event.target.value
        this.props.onChange(text)
    }

    addItem(){
        this.props.onClick()
    }
    render() {
        const getTodos = getTodoItems.bind(this)
        // const todos = getTodos(this.state.items)
        return (
                <InputGroup className="mb-3">
                    <FormControl
                        onChange={this.handleChange}
                        value={this.props.value}
                        placeholder="Add todo"
                        aria-label="Add Todo"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button onClick={this.addItem} variant="outline-primary">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
        )
    }
}

export default TodoInput;