const initialState={balance:1000,username:'Pauly',users:[]}
const reducer=(state=initialState,action) => {
 
    switch(action.type){
 
        case "deposit" : return {...state, balance: state.balance  + action.payload}
 
        case "withdraw": return{...state, balance: state.balance - action.payload}
 
        case "updateusername": return {...state, username: action.username}
 
        case "getusers" :return {...state, users: action.username}
 
        default:return state;
    }
}
 
export default reducer;