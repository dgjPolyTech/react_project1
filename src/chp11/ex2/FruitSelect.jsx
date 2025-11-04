import React, {useState} from "react";
import './FruitSelect.css';

function FruitSelect() {
    const [value, setValue] = useState('grape');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("선택된 과일은 "+value+" 입니다.");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select value={value} onChange={handleChange}>
                    <option value={"banana"}>바나나</option>
                    <option value={"orange"}>오렌지</option>
                    <option value={"melon"}>멜론</option>
                    <option value={"water melon"}>수박</option>
                </select>
            </label>
            <button type={"submit"}>완료</button>
        </form>
    )
}

export default FruitSelect;