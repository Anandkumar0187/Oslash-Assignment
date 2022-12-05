import React, { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs';
import './UserTab.css';
import {data} from '../Assets/Data'

function UserTab({Info}) {
    const [access,setAccess] = useState(Info.access);
  if(!Info.grp){
    return (
        <div>
            <div className='oslash'>
                <img src={Info.img} alt="" id='oslash-logo'/>
                <div className='oslash-Info'>
                    <h4>{Info.name}</h4>
                    <p>{Info.email}</p> 
                </div>
                <button data-bs-toggle="dropdown">  {access} &nbsp;&nbsp;<BsChevronDown /> </button>
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
            </div>
        </div>
    )
  }
  else{
    return (
        <div>
            <div className='oslash'>
              <div id='oslash-grp-logo'>{Info.name[0]}</div>
                <div className='oslash-Info'>
                    <h4>{Info.name}</h4>
                </div>
                <button data-bs-toggle="dropdown">  {access} &nbsp;&nbsp;<BsChevronDown /> </button>
                <ul className="dropdown-menu dropdown-menu" defaultChecked="No Access" style={{border: "none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 10px"}}>
                    {data.map((item,index)=>{
                        let color = "#111827";
                        if (item === "No Access") color = "red";
                        return (
                          <li key={index} onClick={() => setAccess(item)} style={{ color, fontSize: "18px",cursor: "pointer"}} className="dropdown-item" >
                            {item}
                          </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
  }
}

export default UserTab
