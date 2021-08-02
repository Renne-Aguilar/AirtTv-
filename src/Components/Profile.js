import React from 'react'
import '../Style/Profile.css'
import ChannelRow from './ChannelRow'

function Profile() {
    return (
        <div className="profile">
            <ChannelRow
            image='https://images.unsplash.com/photo-1553272725-086100aecf5e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            username='Nick Desk'
            description='Testing the channel app, well Im learning a lot of react'/>
        </div>
    )
}

export default Profile
