import React from "react";
import FancyBorder from "./FancyBorder";

function Dialog(props){
    return (
        <div>
            <FancyBorder color={"blue"}>
                <h1 className={"Dialog-title"}>
                    {props.title}
                </h1>
                <p className={"Dialog-message"}>
                    {props.message}
                </p>
            </FancyBorder>

            <FancyBorder color={"red"}>
                <h1 className={"Dialog-title"}>
                    {props.title}
                </h1>
                <p className={"Dialog-message"}>
                    {props.message}
                </p>
            </FancyBorder>

            <FancyBorder color={"green"}>
                <h1 className={"Dialog-title"}>
                    {props.title}
                </h1>
                <p className={"Dialog-message"}>
                    {props.message}
                </p>
            </FancyBorder>
        </div>
    );
}

function WelcomeDialog(){
    return (
        <Dialog
            title={"어서오세요."}
            message={"우리 사이트에 방문하신 것을 환영합니다."}
        />
    );
}

export default WelcomeDialog;