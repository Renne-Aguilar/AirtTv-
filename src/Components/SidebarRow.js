import React from 'react'
import '../Style/SidebarRow.css'
import HomeIcon from '@material-ui/icons/Home';

function SidebarRow({title, Icon}) {
    return (
        <div className="sidebarRow">
            <Icon className="sidebarRow_icon"
            fontSize="small"/>
            <h3 className="sidebarRow_title">{title}</h3>
            
        </div>
    )
}

export default SidebarRow
