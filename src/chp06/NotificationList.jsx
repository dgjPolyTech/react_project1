import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요 오늘의 스케쥴 입니다"
    },
    {
        id: 2,
        message: "안녕하세요 오늘의 스케쥴 입니다222"
    },
    {
        id: 3,
        message: "안녕하세요 오늘의 스케쥴 입니다3333"
    }
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    // 컴포넌트가 마운트(=컴포넌트가 화면에 렌더링까지 된 후) 한번 실행됨.
    componentDidMount() {
        const {notifications} = this.state;

        timer = setInterval(() => {
            if(notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index])
                this.setState({
                    notifications: notifications
                })
            } else {
                // notifications라는 이름의 state를 초기화
                // interval 설정 Clear
                this.setState({
                    notifications: []
                });
                clearInterval(timer);
            }
        }, 2000) //ms단위.

    }

    // 컴포넌트가 언마운트, 즉 실행 종료될 때 아래 함수도 실행됨...
    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map(notification => {
                        return <Notification
                                    key={notification.id}
                                    id={notification.id}
                                    message={notification.message} />
                    })
                }
            </div>
        );
    }
}

export default NotificationList;