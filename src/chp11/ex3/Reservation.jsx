import React, {useState} from "react";
import './Reservation.css';

function Reservation() {
    const [haveBreakfast, setHaveBreakfast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (event) => {
        alert(`아침식사여부: ${haveBreakfast}, 방문객 수: ${numberOfGuest}`);
    }

    return (
        // 2. className을 추가하고 <br/> 태그를 제거합니다.
        <form onSubmit={handleSubmit} className="reservation-form">
            <label>
                아침식사 여부:
                <input type={"checkbox"} checked={haveBreakfast} onChange={(event) => {
                    setHaveBreakfast(event.target.checked)
                }}/>
            </label>

            <label>
                방문객 수:
                <input type={"number"} value={numberOfGuest} onChange={(event) => {
                    setNumberOfGuest(event.target.value)
                }}/>
            </label>

            <button type={"submit"}>제출</button>
        </form>
    )
}

export default Reservation;