import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return (
            <li className="item container-flex fade-in">
                <span className="text">{this.props.item}</span>
                <div className="btn-delete" onClick={this.props.deleteItem}>-</div>
            </li>
        );
    }
}
export default ToDoItem;
