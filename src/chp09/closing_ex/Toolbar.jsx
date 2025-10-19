import React, {useState} from "react";
import "./toolbar.css";

function Toolbar(props){
    // 훅은 대괄호 사용해야 함.
    const {isLoggedIn, onClickLogin, onClickLogout} = props;

    return(
        <div className="wrapper">
            {/*isLoggedIn이 True면, 즉 로그인 상태면 아래 문구 출력*/}
            {isLoggedIn && <span className={"greeting"}>환영합니다.</span>}
            {isLoggedIn ?
                (<button onClick={onClickLogout}>로그아웃</button>) :
                (<button onClick={onClickLogin}>로그인</button>)}
        </div>
    );
}

export default Toolbar;