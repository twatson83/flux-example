import React from 'react'

export default class ItemList extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul>
                {
                    this.props.items.map(item => <li key={item}>{item}</li>)
                }
            </ul>
        )
    }
}