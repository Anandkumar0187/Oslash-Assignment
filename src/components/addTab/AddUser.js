import React, { useState,useContext } from 'react';
import {data , users, groups} from '../Assets/Data';
import {BsChevronDown} from 'react-icons/bs';
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FaLink } from "react-icons/fa";
import vector from '../Assets/Vector.svg'
import './AddUser.css'
import { useNavigate } from 'react-router-dom';
import { Context } from '../../App';

function AddUser() {
    const [access,setAccess] = useState("Full Access");
    const [filterUser, setFilterUser] = useState(users);
    const [filterGroup, setFilterGroup] = useState(groups);
    const [pill,setPill] = useState({access});
    const [visibility,setVisibility] = useState("visible");
    const [display,setDisplay] = useState("none");
    const {setUser} = useContext(Context);
    const navigate = useNavigate();

    const show =(value)=>{
      const temp = users.filter((data) => {
        if (value=== "") {
            return data
        }
        else {
            if (data.name.toLowerCase().includes(value)) {
                return data
            }

        }
    })
    if(users.includes(temp[0])){

        setFilterUser(temp);
        return;
    }
    else if(groups.includes(temp[0])){
        setFilterGroup(temp);
    }
      
    }
    
  return (
    <div className='a-main'>
      <div>
      <div className='a-header'>
      <span className="badge text-bg-light" style={{display,height:"30px",width:"fit-content",fontSize:"18px",fontWeight:"400",backgroundColor:"#95a5a6",cursor:"pointer",marginTop:"4%",marginLeft:"2%"}}>{pill.name} &nbsp; &nbsp; <img onClick={()=>{
                            setPill({access});
                            setVisibility("visible");
                            setDisplay("none");
                        }} style={{width:"13px"}} src={vector} alt="">
                          </img>
      </span>
        <input style={{visibility}} id='head-input' placeholder='Search emails, names or groups' onChange={(e)=>show(e.target.value)}/>
        <button data-bs-toggle="dropdown">  {access} &nbsp;&nbsp;<BsChevronDown/></button>
                <ul className="dropdown-menu dropdown-menu" defaultChecked="No Access" style={{border: "none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px"}}>
                    {data.map((item,index)=>{
                        let color = "#111827";
                        if (item === "No Access") color = "red";
                        return (
                          <li key={index} onClick={() => setAccess(item)} style={{ color, fontSize: "18px", cursor: "pointer"}} className="dropdown-item" >
                            {item}
                          </li>
                        );
                    })}
                </ul>
        <button onClick={()=>{setUser(pill);navigate("/")}}>Invite</button>
      </div>
      <div>
      <p className='person'>Select a person</p>
            <ul id='allUser'>
                {filterUser.map((person)=>{
                    return(
                        <li id='user' onClick={()=>{setPill({...pill,name:person.name,img:person.img,email:person.email,grp:false});setVisibility("hidden");setDisplay("block")}}>
                            <img style={{width:"35px",height:"35px",borderRadius:"50%"}} src={person.img} alt="" />
                            <p style={{marginLeft:"15px",fontSize:"21px"}}>{person.name}</p>
                        </li>
                    )
                })}
            </ul>
      </div>
      <div>
      <p className='person'>Select a group</p>
            <ul id='allUser'>
                {filterGroup.map((person)=>{
                    return(
                        <li id='user' onClick={()=>{setPill({...pill,name:person,grp:true});setVisibility("hidden");setDisplay("block");}}>
                            <p id='grp-tag'>{person[0]}</p>
                            <p style={{marginLeft:"15px",fontSize:"21px"}}>{person}</p>
                        </li>
                    )
                })}
            </ul>
      </div>
      </div>
      <div className='footer'>
      <p><AiOutlineQuestionCircle/>&nbsp;&nbsp;learn about sharing</p>
      <p><FaLink/>&nbsp;&nbsp;Copy link</p>
    </div>
    </div>
  )
}

export default AddUser
