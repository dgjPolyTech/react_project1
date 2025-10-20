import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* chp04 clock */
/*
import './chp04/Button.css';// 앞으로 만든거 css 적용할 때는 여기 수정
import ConfirmDialog from "./chp04/ConfirmDialog";
import ConfirmDialogs from "./chp04/ConfirmDialogs";
import './chp04/ConfrimDialog.css';
import Clock from "./chp04/Clock";
import './chp04/Clock.css';
 */
// import CommentList from "./chp05/CommentList";
// import Comment from './chp05/Comment';
import NotificationList from "./chp06/NotificationList";
import Counter from "./chp07/exam01/Counter";
import Accomodate from "./chp07/Accomodate";
import Toggle from "./chp08/Toggle";
import Toggle_2 from "./chp08/Toggle_2";
import Toggle_3 from "./chp08/Toggle_3_NewSyntax";
import ToggleFunction from "./chp08/ToggleFunction"
import MyButton_Argument from "./chp08/MyButton_Argument"
import InputAlert from "./chp08/InputAlert"
import ConfirmButtonFunction from "./chp08/ConfirmButtonFunction";

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
        <Accomodate />
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
