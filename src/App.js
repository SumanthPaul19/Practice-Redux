import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import Test from './Test'
import actionCreators from './store/actionCreator'
import {bindActionCreators} from 'redux'
 
function App() {
 
  const storeObj=useSelector(store=>store)
 const dispatch=useDispatch();
 
 const result=bindActionCreators(actionCreators,dispatch)
 console.log(result)
  return (
    <div className="App">
     <h1>App component</h1>
     <hr />
     <h1>Amount in Account:{storeObj.state.balance}</h1>
     <button onClick={()=>result.depositMoney(1000)}>Deposit</button>
     <button onClick={()=>result.withdrawMoney(1000)}>Withdraw</button>
   <button className="btn btn-info ms-5" onClick={result.getUsersInfo}>get users info</button>
   {
      storeObj.state.users.map((userObj,ind)=>{
        return <p className="text-secondary"key={ind}>{userObj.username}</p>
      })
   }
     <Test/>
    
    </div>
  )
}
 
export default App;