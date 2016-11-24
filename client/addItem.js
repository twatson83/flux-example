import React from 'react';
import actions from './actions';

export default class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = { itemText: ""}
        this._onChange = this._onChange.bind(this);
        this._addItem = this._addItem.bind(this);
    }

    render(){
        return (
            <div>
                <input type="text" value={this.state.itemText} onChange={this._onChange} />
                <button onClick={this._addItem}>Add Item</button>
            </div>
        )
    }

    _onChange(e){
        this.setState({
            itemText: e.currentTarget.value
        });
    }

    _addItem(){
        actions.addItem(this.state.itemText);
        this.setState({
            itemText: ""
        });
    }
}