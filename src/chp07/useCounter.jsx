import React, {useState} from "react";

// custom hook(사용자 정의 훅): useState hook을 사용
function useCounter(initialValue){

    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count +1);
    // Math.max(x, y) x나 y 중 더 큰 수를 반환함. 이 코드에서는,
    const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

    // 컴포넌트가 언마운트 되었을 때
    return [count, increaseCount, decreaseCount]
}

export default useCounter;