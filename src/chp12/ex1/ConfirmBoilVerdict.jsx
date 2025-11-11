import React, { useState } from "react";
import BoilVerdict from "./BoilVerdict";
import './ConfirmBoilVerdict.css'; // CSS 파일 import 추가

function ConfirmBoilVerdict() {
    const [temperature, setTemperature] = useState("");

    const handleTemperature = (event) => {
        setTemperature(event.target.value);
    };

    // 물이 끓는지 여부를 판단 (boolean 값)
    const isBoiling = parseInt(temperature) >= 100;

    // 동적으로 클래스 이름을 생성
    // isBoiling이 true면 'boiling', false면 'not-boiling' 클래스를 추가
    const containerClassName = `boil-container ${isBoiling ? 'boiling' : 'not-boiling'}`;

    return (
        // 최상위 div에 동적 className 적용
        <div className={containerClassName}>
            <fieldset className="boil-fieldset"> {/* fieldset에도 클래스 추가 */}
                <legend>섭씨 온도를 입력하세요.</legend>
                <input
                    type="number" // 숫자 입력으로 변경 (모바일에서 숫자 키패드 뜸)
                    value={temperature}
                    onChange={handleTemperature}
                    className="temperature-input" // input에도 클래스 추가
                    placeholder="온도 입력"
                />
                {/* temperature는 string값이므로, 아래처럼 int형으로 바꿔줘야 한다.*/}
                <BoilVerdict celcious={parseInt(temperature)} />
            </fieldset>
        </div>
    );
}

export default ConfirmBoilVerdict;