import React from "react";
import Avatar from "./Avatar";
import './UserInfo.css';

// Avatar 컴포넌트로 유저 props 값을 전달한다.
// 그리고, user.name을 반환한다.
function UserInfo(props){
    return(
        <div className="user-info">
            <Avatar user={props.user}/>
            <div className="user-info-name">
                {props.user.name}
            </div>
        </div>
    )
}

export default UserInfo;