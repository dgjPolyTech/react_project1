import React from "react";
import Notification from "./Notification";

// id와 메시지 값 쌍의 객체를 가진 리스트 선언.
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
    // notifications라는 이름의 state 선언.
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }

    // compoenentDidMount()라는 이름의 메소드 선언.
    componentDidMount() {
        // 이 메소드에서 위에서 선언한 notifications를 사용하겠다는 의미.
        const {notifications} = this.state;

        timer = setInterval(() => {
            // 매 2초마다 state를 참조함.
            // notifications의 길이보다, reservedNotifications의 길이가 길면
            if(notifications.length < reservedNotifications.length) {
                // 처음 notifications의 길이(length)는 0일 것임. 바로 값이 들어가지 않으니까.
                // 하지만 if 문이 실행될 경우, 최대 길이를 기준으로 값이 하나씩 들어가면서, 결과적으로 reversedNotifications의
                // 순서대로 notification의 값이 채워지게 됨.
                const index = notifications.length;
                notifications.push(reservedNotifications[index])

                // 그렇게 state값이 변경되면서, 컴포넌트가 재렌더링되고 아래의 reder 값이 보이게 되는 것임.
                this.setState({
                    notifications: notifications
                })
            } else {
                // 이제 notifications의 길이가 reserved보다 적지 않으면,
                // notifications를 초기화(다시 보일 필요가 없으니까)
                this.setState({
                    notifications: []
                });
                // 타이머도 종료시킴
                clearInterval(timer);
            }
        }, 2000) //ms단위.

    }

    // 대충 페이지를 벗어나거나, 오류가 발생하던가 하면 타이머를 종료시킴.
    componentWillUnmount() {
        if(timer){
            clearInterval(timer);
        }
    }

    render() {
        return(
            <div>
                {
                    // notifiactions의 id값에 따른 message를 순차적으로 호출하게 됨.
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