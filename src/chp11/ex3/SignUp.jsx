import React, {useState} from "react";
import './SignUp.css'; // 1. CSS 파일 import 추가

function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("여성");
    const [interests, setInterests] = useState("");

    const handleSubmit = (event) => {
        // 폼 제출 시 페이지가 새로고침되는 것을 방지
        event.preventDefault();

        alert(`성명 : ${name}
               이메일: ${email}
               비밀번호: ${password}
               성별: ${gender}
               관심사: ${interests}
              `);
        // (참고: alert 뒤에 event.preventDefault()를 두면 작동하지 않을 수 있어 위로 옮겼습니다.)
    };

    return(
        // 2. className="signup-container" 추가
        <div className="signup-container">
            <h2>회원가입</h2>

            {/* 2. className="signup-form" 추가 */}
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    성명:
                    <input type={"text"} value={name}
                           onChange={(event) => {
                               setName(event.target.value);
                           }} required/>
                </label>

                <label>
                    이메일:
                    <input type={"email"} value={email}
                           onChange={(event) => {
                               setEmail(event.target.value);
                           }} required/>
                </label>

                <label>
                    비밀번호:
                    <input type={"password"} value={password}
                           onChange={(event) => {
                               setPassword(event.target.value);
                           }} required/>
                </label>

                <label>
                    성별:
                    <select
                        value={gender}
                        onChange={(event) => {setGender(event.target.value)}}>
                        <option value={"남성"}>남성</option>
                        <option value={"여성"}>여성</option>
                        <option value={"기타"}>기타</option>
                    </select>
                </label>

                <label>
                    관심사:
                    <textarea value={interests} onChange={(event) => {
                        setInterests(event.target.value);
                    }} placeholder={"관심사를 자세히 입력해주세요."}></textarea>
                </label>

                {/* 3. 제출 버튼 추가! */}
                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}

export default SignUp;