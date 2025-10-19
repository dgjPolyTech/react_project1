import React from "react";
import "./Notification.css"

// 아래 코드는 class로 시작하는 "클래스형" 컴포넌트임.
class Notification extends React.Component{
    // constructor는 생성자. 모든 자바스크립트 함수가 내장하고 있음.
    // 생성자에 state를 선언해두어, 생성과 동시에 사용할 수 있게함.(단, 이 코드에는 state 값을 따로 정의하지 않음)
    constructor(props) {
        super(props);

        this.state = {};
    }

    //props로 받아온 값을 아래 return에 정의된 형태로 보여줌.
    render(){
        return(
            <div className={"wrapper1"}>
                <span className={"messageText"}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;