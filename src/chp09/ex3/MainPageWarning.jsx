import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

import './MainPage_style.css';

function MainPageWarning(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return (
        <div>
            <WarningBanner warning={showWarning} />

            <button onClick={handleToggleClick}
                    className={`toggle-button ${showWarning ? 'hide':''}`}>
                {/*showWarning의 값에 따라 클래스 명에 hide라는 글자를 붙이거나 안 붙이는 것으로 스타일 적용될 지 안될 지 정함*/}
                {showWarning ? '감추기' : '보이기'}
            </button>
        </div>
    );
}

export default MainPageWarning;