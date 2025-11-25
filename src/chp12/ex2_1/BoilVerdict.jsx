import React from 'react';
import "../ex2_1/Caculcator.css";

function BoilVerdict(props){
    // 100도 이상인지 확인 (true/false)
    const isBoiling = props.celsius >= 100;

    // 조건에 따라 클래스 이름 결정
    // 기본 'boil-verdict'에, 끓으면 ' boiling'을 덧붙임
    const className = `boil-verdict ${isBoiling ? 'boiling' : ''}`;

    return (
        // 결정된 클래스 이름을 div에 적용
        <div className={className}>
            {isBoiling ? '물이 끓습니다.' : '물이 끓지 않습니다.'}
        </div>
    );
}

export default BoilVerdict;