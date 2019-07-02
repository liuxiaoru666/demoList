
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {Redirect} from 'react-router-dom'
import {actionCreators} from './store'
class Login extends Component {
    render(){
        const{login}=this.props;
        console.log(login)
        if(!login){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input)=>{this.account=input}}></Input>
                        <Input placeholder="密码" type='password' ref={(input)=>{this.password=input}}></Input>
                        <Button onClick={()=>{this.props.loginFn(this.account,this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
        else{
        return<Redirect to='/'></Redirect> 
        }
           
    }
    
   
}


const mapState=(state)=>{
    return{
       login:state.get('login').get('login')
    }
}

const mapDisPatch=(dispatch)=>{
    return{
        loginFn(ac,ps){
            dispatch(actionCreators.login(ac.value,ps.value))
        }
    }
}


export default connect(mapState,mapDisPatch)(Login);