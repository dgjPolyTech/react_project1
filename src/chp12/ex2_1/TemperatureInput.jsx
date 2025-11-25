import React from "react";

// c, f 입력 시 섭씨, 화씨로 변환하기 위한 상수
const scaleNames = {
    c: '섭씨',
    f: '화씨'
}

// 이름 그대로 온도 입력하는 컴포넌트
function TemperatureInput(props) {
    // event 핸들러이므로, 화살표 함수의 ()안에 event를 집어넣는다.
    const handleChange = (event) => {
        props.onTemperatureChange(event.target.value);
    };

    return(
      <fieldset>
          {/* fieldSet이 입력창에 테두리 그려주는 속성, legend는 그 테두리에 그려지는 문자열. */}
          <legend>온도를 입력하세요.(단위: {scaleNames[props.scale]})</legend>
          <input type={"text"} value={props.temperature} onChange={handleChange}/>
      </fieldset>
    );
}

export default TemperatureInput;