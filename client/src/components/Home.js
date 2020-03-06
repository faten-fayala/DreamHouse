import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadUser} from '../actions/AuthActions'



class Home extends Component {
UNSAFE_componentWillMount(){
    this.props.loadUser()
  }
  render() {
    return (
      <div>
         <h1>this is the home page</h1>  
      </div>
    )
  }
}

export default connect(null,{loadUser})(Home)
