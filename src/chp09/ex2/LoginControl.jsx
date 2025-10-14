import {React, useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

import Greeting from "../ex1/Greeting";

function LoginControl(props){
    //
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogInClick = () => {
        setIsLoggedIn(true)
    }

    const handleLogOutClick = () => {
        setIsLoggedIn(false)
    }

    // 조건부에 따라 다른 button 컴포넌트 값을 받을 btn 변수. 선언만 해둠
    let btn;

    // 로그인 된 상태면 로그아웃이, 아니면 로그인이 들어간다.
    if(isLoggedIn){
        btn = <LogoutButton onClick={handleLogOutClick} />
    } else {
        btn = <LoginButton onClick={handleLogInClick} />
    }

    return(
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {btn}
        </div>
    );
}

export default LoginControl;