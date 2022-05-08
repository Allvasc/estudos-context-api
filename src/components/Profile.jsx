import React from 'react'
import { AuthContext } from '../provider/auth'


const Profile = () => {
    const { user } = React.useContext(AuthContext)

    return (
        <div>
            <div>Profile</div>
            <p>{user.name}</p>
        </div>

    )
}

export default Profile