import React, { Component } from 'react';

class Tree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpened: false
        };
    }

    toggleItem() {
        this.setState((prevState, props) => ({
            isOpened: !prevState.isOpened
        }));
    }

    getColor() {
        const colors = ['purple', 'indigo', 'blue', 'grey', 'teal', 'green', 'lime'];
        let index = this.props.color % colors.length;
        return colors[index];
    }

    render() {
        let skills = this.props.item.skills || [];

        let items = skills.map((item) => {
            return (
                <Tree item={item} color={this.props.color + 1}/>
            );
        });

        let openClass = this.state.isOpened ? 'open' : 'close';
        let colorStyle = {backgroundColor:  this.getColor()};

        return (
            <div className='tree'>
                <div onClick={() => this.toggleItem.call(this)} className='tree-element' style={colorStyle}>
                    {this.props.item.name}
                </div>
                <div className={'tree-container ' + openClass}>
                    {items}
                </div>
            </div>
        );
    }
}

export default Tree;