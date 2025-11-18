import React from "react";

const unitNames = {
    km: '킬로미터',
    mile: '마일'
};

function DistanceInput(props){
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return(
        <div>
            <legend>
                {/* props로 받은 unit의 값이 km이면 '킬로미터', mile이면 '마일'이라는 한글 문자가 나타날 거임. */}
                {unitNames[props.unit]} 입력:
            </legend>
            <input type={"text"} value={props.distance} placeholder={`${unitNames[props.unit]}를 입력하세요.`} onChange={handleChange}/>
        </div>
    );
}

export default DistanceInput;