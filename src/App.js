import React, { useState ,useEffect, createContext} from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {HiShare} from 'react-icons/hi'
import ShareTab from './components/ShareTab/ShareTab';
import AddUser from './components/addTab/AddUser';
export const Context = createContext();

function App() {
  const [display, setDisplay] = useState("none");
  const [user,setUser] = useState({});
  const [set,setSet] = useState(new Set());
  const [arr,setArr] = useState([]);
  const showTab = ()=>{
    if(display === "none"){
      setDisplay("block")
    }else{
      setDisplay("none")
    }
  }
  useEffect(()=>{
    
      if(set.has(user.name)||!user.name) return;
      set.add(user.name);
      setArr([...arr,user]);
  
  },[user])
  
  return (
    <Context.Provider value={{user,setUser,arr}}>
      <div className='main'>
      <h2>Click on Share Button</h2>
      <button onClick={showTab}>Share <HiShare/></button>
      </div>
      <Routes>
        <Route path='/' element={<ShareTab display={display}/>}/>
        <Route path='/add' element={<AddUser/>} />
      </Routes>
    </Context.Provider>
  );
}

export default App;