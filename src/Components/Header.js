import React, {useState} from 'react'
import '../Style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'


function Header() {
  const [inputSearch, setInputSearch] = useState('')
    
    return (
        <div className="header">
            <div className="header_left">
              <h3>Air Tv+</h3>
            </div>

            <div className="header_center">
              
                <SearchIcon/>
               
              <input 
              placeholder="Search"
              onChange={e => setInputSearch(e.target.value)} value={inputSearch} type='text'/>
            </div>

            <div className="header_right">
              <Link to="/login">
              <p>Sign Up</p>
              </Link>

              <Link to="/profile">
              <Avatar src='https://images.unsplash.com/photo-1603325725990-553457a327f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'/>
              </Link>
            </div>


        </div>
    )
}

export default Header
