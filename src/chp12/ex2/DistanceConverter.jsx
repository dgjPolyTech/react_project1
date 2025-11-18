import React, { useState } from "react";
import DistanceInput from "./DistanceInput";
import './DistanceConverter.css'; // 1. CSS 파일 임포트

// --- (toKilometers, toMiles, tryConvert 함수는 동일) ---
function toKilometers(miles){
    return miles * 1.60934;
}

function toMiles(km) {
    return km / 1.60934;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);
    if(Number.isNaN(input)) {
        return '';
    }

    const output = Math.round(convert(input) * 1000) / 1000;
    return output.toString();
}
// --- (여기까지 동일) ---

function DistanceConverter() {
    const [distance, setDistance] = useState("");
    const [unit, setUnit] = useState("km");

    const handleKilometerChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    };

    const kilometers = (unit ==="mile") ? tryConvert(distance, toKilometers) : distance;
    const miles = (unit ==="km") ? tryConvert(distance, toMiles) : distance;

    return(
        // 2. 최상위 div에 className 추가
        <div className="distance-converter">
            <h1>거리단위 변환기</h1>

            {/* 3. 입력 필드 그룹에 className 추가 */}
            <div className="input-group">
                <DistanceInput
                    unit={"km"}
                    distance={kilometers}
                    onDistanceChange={handleKilometerChange}
                />
                <DistanceInput
                    unit={"mile"}
                    distance={miles}
                    onDistanceChange={handleMileChange}
                />
            </div>

            {/* 4. 결과 p 태그에 className 추가 */}
            <p className="result-text">
                {/* 값이 없을 때 0이라도 보이도록 처리 (선택 사항) */}
                {kilometers || 0}km는 {miles || 0} 마일입니다.
            </p>
        </div>
    );
}

export default DistanceConverter;