import React from "react";

function WarningBanner(props){
    if(!props.warning){
        return null;
    } else {
        return (<div className={"warning-banner"}>경고!!!</div>);
    }
}

export default WarningBanner;