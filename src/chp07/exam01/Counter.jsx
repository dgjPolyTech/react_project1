import React, {useState, useEffect} from "react";
// useState 훅을 사용하여, 상태설정이 변경될 때마다 다시 Rendering이 되게 변경

function Counter(){
    // count라는 이름으로 state를 변수?느낌으로 사용.
    // setCount는 count와 연계되어, count의 값을 변경하는데 사용한다.
    const [count, setCount] = useState(0);

    // useEffect: 메소드로 추정?되며, doucment.title을 총 count번 클릭했습니다.로 변경함.
    // 받아오는 값이 딱히 없기에 () => {}로 {}안에 값을 return함.
    // return () => {}는 도저히 뭔 소린지 모르겠네.
    useEffect(() => {
        document.title = `총 ${count}번 클릭했습니다.`;


        return () => {}
    });

    // count라는 이름으로 state를 변수명처럼 사용한다 했는데,
    // 실제로 아래에 {count}번 클릭했습니다. 라는 식으로 사용하고 있음.

    // 그리고 버튼 클릭 시마다 setCount에 count+1한 값을 보내서, 버튼 누를 때마다 count가 1씩 증가하게 함.
    return (
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count+1)}>클릭하세요.</button>
        </div>
    );
}

export default Counter;