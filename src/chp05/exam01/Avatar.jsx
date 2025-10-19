import React from "react";
import './Avatar.css';

// 아바타 표시하는 컴포넌트.
function Avatar(props) {
    return(
        <img
            className="avatar"
            src={props.user.avatarUrl}
        />
    );
}

export default Avatar;