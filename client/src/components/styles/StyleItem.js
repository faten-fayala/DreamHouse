import React, { Component } from 'react'
import './style.css'
export class StyleItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div onClick={()=>this.props.handleStyle(this.props.data.classe)} className="position">
                       <a href="#next"><img  className={this.props.styledemanded === this.props.data.classe ? "ImageChecked " :"Image"}
                        src={this.props.data.imgURL}/></a>
                    <div className="textOnStyle">
                     <span >{this.props.data.classe} </span>
                      </div>

                    
            </div>
        )
    }
}

export default StyleItem
