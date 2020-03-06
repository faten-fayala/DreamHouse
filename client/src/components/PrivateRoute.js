import React from 'react'
import {connect} from 'react-redux'
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({component : Component,auth ,...rest}) => {
    return (
        <Route { ...rest} render={props => !localStorage.token ? (
            <Redirect to="/login" />
        ) : (<Component { ...props } />)}

        />
    )
}
const mapStateToProps = state=>{
    return{
        auth:state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute)
