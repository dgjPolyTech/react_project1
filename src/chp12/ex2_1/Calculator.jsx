import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";
import BoilVerdict from "./BoilVerdict";

import "../ex2_1/Caculcator.css";

// DistanceConverter의 tryConvert 활용.
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)) {
        return '';
    }

    const output = Math.round(convert(input) * 1000) / 1000; // 정확한 숫자로 나오게 하기 위한 수식.
    return output.toString();
}

// 섭씨를 화씨값으로 변경하는 함수
function toCelcius(fahrenheit){
    // 화씨를 섭씨로 변경하는 수식
    return ((fahrenheit - 32) * 5) / 9;
}

// 화씨를 섭씨값으로 변경하는 함수
function toFahrenheit(celcius){
    // 섭씨를 화씨로 변경하는 공식. 위의 공식을 정 반대로 한다.
    return ((celcius * 9) / 5) + 32;
}

function Calculator() {
    const [temperature, setTemperature] = useState("");
    const [scale, setScale] = useState("c");

    // 섭씨(c)로 표기 변경
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale("c");
    }

    // 화씨(f)로 표기 변경
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    }
    
    // 삼항 연산자를 통해, 화씨면 섭씨로 변환하고 아니면(=처음부터 섭씨면) 그대로 둠
    const celsius = scale === "f" ? tryConvert(temperature, toCelcius) : temperature;

    // 삼항 연산자를 통해, 화씨면 섭씨로 변환하고 아니면(=처음부터 섭씨면) 그대로 둠
    const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
        <div className={"calculator-container"}>
            <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleCelsiusChange}/>
            <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
            {/* float값으로 온도를 보낸다. */}
            <BoilVerdict celsius={parseFloat(celsius)}/>
        </div>
    );
}

export default Calculator;