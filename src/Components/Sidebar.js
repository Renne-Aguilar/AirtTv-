import React from 'react'
import '../Style/Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MusicNoteIcon from '@material-ui/icons/MusicNote';



function Sidebar() {
    return (
        <div className="sidebar">
            
            <SidebarRow Icon={HomeIcon} title='Home'/>
            <SidebarRow Icon={SubscriptionsIcon} title='Subscrition'/>
            <SidebarRow Icon={WhatshotIcon} title='Trends'/>
            <SidebarRow Icon={MusicNoteIcon} title='Music'/>
        </div>
    )
}

export default Sidebar
