import React from "react";
import './Avatar.css';

// 아바타 표시하는 컴포넌트.
// props로 받아온 데이터 user의 avatarUrl을 바탕으로 이미지 표시한다.
function Avatar(props) {
    return(
        <img
            className="avatar"
            src={props.user.avatarUrl}
        />
    );
}

export default Avatar;