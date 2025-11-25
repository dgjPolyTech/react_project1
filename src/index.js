import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import Reservation from "./chp11/ex3/Reservation";
//import SignUp from "./chp11/ex3/SignUp";
import ConfirmBoilVerdict from "./chp12/ex1/ConfirmBoilVerdict";

import Calculator from "./chp12/ex2_1/Calculator";

import WelcomeDialog from "./chp12/ex3/WelcomeDialog";
import FancyBorder from "./chp12/ex3/FancyBorder";

import DistanceConverter from "./chp12/ex2/DistanceConverter";

const root = ReactDOM.createRoot(document.getElementById('root'));

// setInterval(() => {
//     // 괄호 안 내용을 렌더링 시킨다는 의미.
//     root.render(
//         <React.StrictMode>
//             <ConfirmButtonFunction />
//         </React.StrictMode>
//     );
// }, 1000);

root.render(
    <React.StrictMode>
        <WelcomeDialog />
    </React.StrictMode>
);
// index.js 실행할 때에는, root.render의 React.StrictMode 사이 위치에 해당하는 컴포넌트 명만 바꿔주면 됨.
// 그리고 index.js는 npm start로 실행해야 함.

// 혹시 npm 관련 실행 안되면, 아래 터미널에서 cmd 키고
// npm install -> npm start
// 이렇게 처음 실행하면 생각보다 오래걸림.
// npm start 실행 > 구성편집 >

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
