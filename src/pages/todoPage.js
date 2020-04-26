import React from "react"
import {Col, Container, Row} from "react-bootstrap";
import TodoInput from "../components/todoInput";
import ItemContainer from "../components/ItemContainer";
import TodoItem from "../components/TodoItem";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            items: [

            ],
            dones: [],
        }
        this.handleChange = this.handleChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.clickItem = this.clickItem.bind(this)
    }

    handleChange(text){
        this.setState({value: text})
    }

    clickItem(parameter){
        if (parameter.type === "done"){
            const filteredState = this.state.items.filter(item => item.id !== parameter.id)
            this.setState({items: filteredState, dones: [...this.state.dones, ...this.state.items.filter(item => item.id === parameter.id)]})
        } else if (parameter.type === "delete") {
            const filteredState = this.state.items.filter(item => item.id !== parameter.id)
            const filteredDones = this.state.dones.filter(item => item.id !== parameter.id)
            this.setState({items: filteredState, dones: filteredDones })
        }
    }

    addItem(){
        this.setState({
            items: [...this.state.items, {id: ++this.state.items.length, name: this.state.value}],
            value: ''
        })
    }
    render() {
        return (
            <Container fluid className="mt-2">
                    <Row>
                        <Col xs={12} sm={{span: 9, offset: 1}} md={{span: 6, offset: 3}} xl={{span: 4, offset:4}} as="div">
                            <TodoInput onChange={this.handleChange} value={this.state.value} onClick={this.addItem}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={{span: 9, offset: 1}} md={{span: 6, offset: 3}} xl={{span: 4, offset:4}} as="div">
                            <ItemContainer items={this.state.items} dones={this.state.dones} onClick={this.clickItem}/>
                        </Col>
                    </Row>
            </Container>
    );
    }
}

export default Todo;