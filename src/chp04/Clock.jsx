import React from 'react';

// 아래의 clock과 같은 형태를 함수형 컴포넌트라고 함.
// 함수의 형태로 선언하고, return에 그려져야 할 요소를 html 형태로 작성해주는 형태임.
function Clock(props){
    return (
        // Clock 함수형 컴포넌트 자체는, 그저 현재 시각을 보여주는 역할만을 함.
        <div>
            <h2 className="clock">{new Date().toLocaleTimeString()}</h2>
        </div>
    )
}

export default Clock;