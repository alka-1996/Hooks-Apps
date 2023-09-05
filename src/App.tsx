  import React, { useContext, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes,} from 'react-router-dom';
import Navbar from './components/Navbars/Navbar';
import Practice from './components/practice/Practice';
import { Person } from './components/person/Person';
import Users from './components/users/Users';
import { StateManagement } from './components/hooks/StateManagement';
import UserProvider, { UserContext } from './components/hooks/UserContext';
import { UserRef } from './components/hooks/UserRef';
import { TudoList } from './components/tudolist/TudoList';





function UserDetails(){
  const {user}=useContext(UserContext)
  return(
    <>
    <p>User Name:{user.name}</p>
    <p>User Email:{user.email}</p>
    </>
  )
}

function AnotherComponent(){
  const {user,setUser}=useContext(UserContext) 

  useEffect(()=>{
    setUser({
      name:"Pooja",
      email:"pooja@gmail.com"
    })
  },[])
  return(
    <>
    <p>some other component</p>
    </>
  )
}
function App() {
  return (
    
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/Practice" element={<Practice name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>}/>
      <Route path="/Person" element={<Person message="The count Value is"/>}/>
      <Route path="/Users" element={<Users userid={1} username="admin" width={55}/>}/>
      <Route path="/StateManagement" element={<StateManagement/>}/>
    <Route path="UserProvider" element={<UserProvider>  <UserDetails/>  <AnotherComponent/></UserProvider>}/>
    <Route path="/UserRef" element={<UserRef/>}/>
    <Route path="/TudoList" element={<TudoList/>}/>


    </Routes>
      </div>
    </Router>



//  <div className="App">
// <Navbar/>
// <div>
// <Practice name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()}/>
// <Person message="The count Value is"/>
// <Users userid={1} username="admin" width={55}/>
// <StateManagement/>
// <ThemeProvider>
//   <UserDetails/>
//   <AnotherComponent/>
// </ThemeProvider>
// </div>
// </div>
  );
}

export default App;
