import {connect} from 'react-redux'
import React from 'react'
import Alert from 'react-bootstrap/Alert'
const Alerts = (props) => {
    return (props.alerts.length > 0 && props.alerts.map(alert =>
      
 <Alert key={alert.id} variant={alert.type}>
    {alert.msg} 
  </Alert>


    ))
}


const mapStateToProps =state=>{
    return{
    alerts:state.alert
  } 
}
export default connect(mapStateToProps)(Alerts)
