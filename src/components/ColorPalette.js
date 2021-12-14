import React, { Component } from 'react'
import './ColorPalette.css'
export class ColorPalette extends Component {
    render() {
        const {type, color} = (this.props);
        const colorType=type.toLowerCase();
        console.log(colorType);
        return (
                <div className="col-sm-4 col-md-2">
                    <h4 className={`text-center bg-${colorType}`}>{type}</h4>
                    <div className="color-palette-set">
                        <div className={`bg-${colorType} color-palette`}><span>{color}</span></div>
                        <div className={`bg-${colorType} disabled color-palette`}><span>Disabled</span></div>
                    </div>
                </div>
        )
    }
}

export default ColorPalette
