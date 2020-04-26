import React from "react"
import {Col} from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";


class ItemContainer extends React.Component{
    constructor(props) {
        super(props);
        this.content = null
        this.dones = null
        this.doneItem = this.doneItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    doneItem(itemId){
        this.props.onClick({type: 'done', id: itemId, done: true})
    }
    deleteItem(itemId){
        this.props.onClick({type: 'delete', id: itemId})
    }

    render() {
        if (this.props.dones){
            this.dones= this.props.dones.map(done => <div key={done.id} className="p-2 d-flex justify-content-between align-items-center" style={{border: "groove", backgroundColor: "white"}}>
                <strike>{done.name}</strike>
                <ButtonGroup aria-label="Basic example">
                  <Button onClick={() => this.deleteItem(done.id)} variant="danger">Delete</Button>
                </ButtonGroup>
        </div>)
        }
        if (this.props.items.length){
        this.content = this.props.items.map(item => <div key={item.id} className="p-2 d-flex justify-content-between align-items-center" style={{border: "groove", backgroundColor: "white"}}>
            <p>{item.name}</p>
                <ButtonGroup aria-label="Basic example">
                  <Button onClick={() => this.doneItem(item.id)} variant="success">Done</Button>
                  <Button onClick={() => this.deleteItem(item.id)} variant="danger">Delete</Button>
                </ButtonGroup>
        </div>)
    } else {
        this.content = <p className="text-center">Add new item</p>
    }
        return (
            <div style={{border: "groove"}}>
            <div className="p-2" style={{backgroundColor: "gainsboro"}}>
                {/*<div className="p-2" style={{border: "groove", backgroundColor: "white"}}></div>*/}
                {this.content}
                {this.dones}
            </div>
        </div>
        );
    }
}

export default ItemContainer;