import React from "react";
import guestGreeting from "./GuestGreeting";

function UserGreeting(props){
    return <h1>다시 오셨군요!</h1>
}

function GuestGreeting(props){
    return <h1>회원가입을 해주세요!</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    //const isLoggedIn = true;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return <GuestGreeting /> // 세미콜론은 생략해도 가능.
}

export default Greeting;