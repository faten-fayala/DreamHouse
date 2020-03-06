import React, { Component } from 'react'
import './color.css'
export class ColorItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div onClick={() => this.props.handleColor(this.props.data.name)} className="position">
                    <a href="#next"><img  className={this.props.color === this.props.data.name ? "ColorChecked " :"ColorImage"} src={this.props.data.imgURL}/></a>
                                </div>
        )
    }
}

export default ColorItem
