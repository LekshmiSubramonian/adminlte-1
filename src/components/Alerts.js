import React, { Component } from 'react'
import {HiBan} from 'react-icons/hi'

export class Alerts extends Component {
    render() { 
        return (
            <div className={`alert alert-${this.props.color} alert-dismissible`}>
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                <h5><HiBan /> Alert!</h5>
                {this.props.message}
               </div>
        )
    }
}

export default Alerts
