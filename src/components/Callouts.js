import React, { Component } from 'react'

export class Callouts extends Component {
    render() {
        return (
            <div className={`callout callout-${this.props.color}`}>
                <h5>I am a {this.props.color} callout!</h5>
                <p>{this.props.message}</p>
            </div>
        )
    }
}

export default Callouts
