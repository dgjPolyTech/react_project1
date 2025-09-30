import React, {useState} from "react";

function InputAlert(){
    //onChange 이벤트 발생 시의 동작을 설정
    // 교수님 정답
    // 훅을 사용
    // 교수님 피셜 함수평 컴포넌트로 많이 설계하라고 하시는데 구체적으로 알아보기
    const[inputValue, setInputValue] = useState("");

    function handleChange(event) {
        setInputValue(event.target.value);
    }
    
    // const handleChange = (event) => {
    //     setInputValue(event.target.value);
    // }



    return(
        <div>
            <h3>아래의 텍스트 박스에 입력내용이 변경될 때마다 알림창이 표시됩니다.</h3>
            <input size={50} type="text" onChange={handleChange} placeholder={"Input Text..."}/>
            <h2 id={"result"}>입력된 내용: {inputValue}</h2>
        </div>
    )

    // 내가 짠 부분
    // const onChange = (event) => {
    //     //alert(event.target.value);
    //     console.log(event.target.value);
    // }
    //
    // return(
    //     <div align="center">
    //         <input onChange={(event) => {
    //             onChange(event);
    //         }}/>
    //     </div>
    // )
}

export default InputAlert;