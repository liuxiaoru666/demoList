
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox} from './style';
class Login extends Component {
    render(){
        return(
            <LoginWrapper>
                <LoginBox></LoginBox>
            </LoginWrapper>
        )
           
    }
    
   
}


const mapState=(state)=>{
    return{
       
    }
}

const mapDisPatch=(dispatch)=>{
    return{
        
    }
}


export default connect(mapState,mapDisPatch)(Login);