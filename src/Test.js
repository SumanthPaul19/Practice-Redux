import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { bindActionCreators } from 'redux';
import actionCreators from './store/actionCreator';
export default function Test(){
 
    const dispatch=useDispatch();
    const result=bindActionCreators(actionCreators,dispatch)
    console.log(result)
 
    const state=useSelector(state=>state)
    const [username,setUsername]=useState(state.state.username)
    
    const handleSubmit=(e)=>{
        e.preventDefault(e);
        console.log(username)
        result.updateUser(username)
    }
    return(
        <div className="bg-info text-white mt-5">
            <h1>Username:{state.state.username}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" onChange={e=>setUsername(e.target.value)} value="Pauly" />
                <button type="submit">Change</button>
            </form>
        </div>
    )
}