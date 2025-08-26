import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chp03/Library';
import './chp03/Book.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
  </React.StrictMode>
);

// index.js 실행할 때에는, root.render의 React.StrictMode 사이 위치에 해당하는 컴포넌트 명만 바꿔주면 됨.
// 그리고 index.js는 npm start로 실행해야 함.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
