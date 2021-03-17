import React, { Component } from 'react'

export default class Badge extends Component {

    constructor(){
        super();
        this.state = {count:0}
    }

    handleClick(){
        console.log('Click event fired');
        this.setState({count: ++this.state.count})
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>
                {this.props.caption} <span className="badge bg-secondary">{this.state.count}</span>
                </button>
            </div>
        )
    }
}
