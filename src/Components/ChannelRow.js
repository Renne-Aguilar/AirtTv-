import React from 'react'
import '../Style/ChannelRow.css'
import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


function ChannelRow({ image, username, description}) {
    return (
        <div className="channelRow">
            <Avatar 
            className="channelRow_avatar"
            src={image}/>

            <div className="channelRow_text">
                <h3>{username} <VerifiedUserIcon/></h3>
                
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
