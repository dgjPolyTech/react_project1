import React from "react";

function AppNumberList() {
    const numbers = [1, 2, 3, 4, 5];
    return(
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers = {numbers} />
        </div>
    );
}

function NumberList(props){
    const numbers = props.numbers;


    const listItems = numbers.map((number) =>
        // <li>{number}</li> //<- 이렇게 써도 사용은 가능하나, 가능한 아래처럼 요소별 키를 지정해서 사용해야함.
        // key 값은 보통 문자열로 줌. 따라서 number도 그대로 쓰지 않고 toString으로 형변환 해준 것.
        <li key={number.toString()}>{number}</li>
    );

    return(
        <ul>
            {listItems}
        </ul>
    );
}

export default AppNumberList;