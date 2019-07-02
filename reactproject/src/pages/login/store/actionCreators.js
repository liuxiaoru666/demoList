import axios from 'axios';
import * as constants from './constants';

const changeLoginStatus=(status)=>({
    type:constants.CHANGE_LOGIN_STATUS,
    status:status
})

export const login=(ac,ps)=>{
    return (dispatch)=>{
        if(ac&&ps){
            axios.get('/api/login.json?account='+ac+'&password='+ps).then((res)=>{
                if(res.data.code==200){
                    dispatch(changeLoginStatus(true))
                }  
              })
        }
    }
}

export const logout=()=>({
    type:constants.LOGOUT,
    status:false
})