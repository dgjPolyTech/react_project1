import React, {useState} from "react";

function SelfToggle(props){
    const [toggle, setToggle] = useState(false);

    // 틀린 방식
    // handleClick(){
    //     this.setToggle = !toggle;
    // }

    const handleClick = () =>{
        setToggle(!toggle);
    }
    
    return(
        <div>
            {toggle && <h1>안녕</h1>}
            <button onClick={handleClick}>{toggle ? "숨기기":"보이기"}
            </button>
        </div>
    )
}

export default SelfToggle;