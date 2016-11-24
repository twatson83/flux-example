import React from 'react';
import store from './store';
import AddItem from './addItem';
import ItemList from './itemList';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: store.getItems()
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount(){
        store.addChangeListener(this._onChange);
    }

    render() {
        return (
            <div>
                <AddItem />
                <ItemList items={this.state.items} />
            </div>
        )
    }

    componentWillUnmount(){
        store.removeChangeListener(this._onChange);
    }

    _onChange(){
        this.setState({ items: store.getItems() });
    }
}