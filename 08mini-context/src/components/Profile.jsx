import React,{use, useContext} from "react";
import USerContext from "../context/UserContext";


function Profile(){
    const {user} =useContext(USerContext)

    if(!user) return <div>Please login</div>
    return(
        <div>
            Welcome {user.userName}
        </div>
    )
}
export default Profile;