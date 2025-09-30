import React, {useState} from "react"

function ToggleFunction(){
    const[isToggleOn, setIsToggleOn] = useState(true);

    // function handleClick(){
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    }

    return(
        <div align="center" style={{margin: 200}}>
            <button onClick={handleClick}>
                Function Type Component {isToggleOn ? "On" : "Off"}
            </button>
        </div>
    );

}

export default ToggleFunction;