const depositMoney=(amount)=>{
    return (dispatch)=>{
              dispatch({
                  type:"deposit",
                  payload:amount
              })
    }
}
 
const withdrawMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"withdraw",
            payload:amount
        })
    }
}
const updateUser=(username)=>{
    return (dispatch)=>{
        dispatch({
            type:"updateusername",
            username:username
        })
    }
}
const getUsersInfo=()=>{
    return (dispatch)=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type:"getusers",
                username:data
            })
        })
       
    }
}
export default {depositMoney,withdrawMoney,updateUser,getUsersInfo}