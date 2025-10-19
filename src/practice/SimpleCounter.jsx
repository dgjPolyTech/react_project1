import React, {useState} from "react";

// 함수명은 반드시 대문자로 시작해야 함.
function SimpleCounter(props){
    // useState 훅:
    const [getCount, setCount] = useState(0);

    return(
        <div>
            <p>현재 카운트: {getCount}</p>
            <button onClick={() => setCount(getCount + 1)}>
                숫자 증가
            </button>
        </div>
    )

}

// export도 가능한 함수명과 동일하게.
export default SimpleCounter;