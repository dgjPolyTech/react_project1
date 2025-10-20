import React, {useEffect, useState} from 'react';
import useCounter from "./useCounter";

const MAX_Count = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);

    // useCounter를 import해서 가져와 사용함. useCounter 같은 걸 "커스텀 훅"이라고 함.
    const [count, increaseCount, decreaseCount] = useCounter(0);

    
    // useEffect => useState 사용 시 같이 쓰이는 함수로, 렌더링시 마다(=화면이 한번 그려질 떄마다) 이후 처리되는 작업을 정의함.
    // 아래 코드의 경우, 의존성 배열이 없으므로 렌더링 될 때마다 자동으로 실행됨. isFull이 TRUE인지 FALSE인지 console.log에 출력함
    useEffect(() => {
        console.log("============");
        console.log("useEffect() isFull is called");
        console.log(`isFull: ${isFull}`);
    });

    // 반대로 이 useEffect는 의존성 배열 [count]를 갖고있는데, 위에서 선언한 count state가 변경될 때마다 실행됨.
    // count값이 변경될 때마다, setIsFull의 값을 count >= MAX_COUNT의 결과로 변경
    // 때문에 count값이 위에서 선언한 MAX_Count값 이상이 되면 아래의 isFull && ... 메시지가 표시되는 것임.
    useEffect(() => {
        setIsFull(count >= MAX_Count);
        console.log(`Current count value: ${count}`)
    }, [count]);

    // isFull && -> isFull의 값이 true이면, 뒤의 내용을 출력한다라는 의미로 보임. &&은 일종의 표기법인듯?
    return(
        <div style={{padding: 20}}>
            <p>{`총 ${count}명이 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull} style={{margin: 10}}>입장</button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{color:"red", margin: 15}}>수용할 수 있는 정원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accomodate;