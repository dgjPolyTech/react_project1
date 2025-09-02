import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './chp04/Button.css';// 앞으로 만든거 css 적용할 때는 여기 수정
import ConfirmDialog from "./chp04/ConfirmDialog";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmDialog />
  </React.StrictMode>
);

// index.js 실행할 때에는, root.render의 React.StrictMode 사이 위치에 해당하는 컴포넌트 명만 바꿔주면 됨.
// 그리고 index.js는 npm start로 실행해야 함.

// 혹시 npm 관련 실행 안되면,

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
