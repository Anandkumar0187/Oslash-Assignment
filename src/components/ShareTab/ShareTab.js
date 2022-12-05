import React, { useContext } from 'react';
import {MdPublic} from 'react-icons/md';
import './ShareTab.css';
import logo from '../Assets/oslash.svg';
import UserTab from '../UserTab/UserTab';
import { Context } from '../../App';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';


function ShareTab({display}) {
  const {arr} = useContext(Context);
  const navigate = useNavigate();
  const oslash = {
        name:"Everyone at OSlash",
        img:logo,
        email:"25 workspace members",
        access:"No Access"
  }
  return (
    <div>
    <div className='s-main'>
      <div style={{display}}>
        <div className='s-header' >
          <div id='s-globe'><MdPublic style={{width : "50px", height : "50px"}}/></div>
          <div id='s-shareWeb'>
              <h4>Share to web</h4>
              <p>Publish and share link with everyone</p>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" id="flexSwitchCheckDefault" type="checkbox" role="switch" style={{backgroundColor: "#E5E7EB",width: "50px",height: "30px",color: "white",border: "none",cursor:"pointer"}}/>
          </div>
        </div>
        <div className='s-searchText'>
          <input type="text" placeholder='People, emails, groups' onClick={()=>navigate("/add")}/>
          <button>Invite</button>
        </div>
        <div>
            <UserTab Info={oslash}/>
            {arr.map((users)=>{
              return <UserTab Info={users}/>
            })}
        </div>
        <Footer/>
      </div>
    </div>
    </div>
  )
}
export default ShareTab;