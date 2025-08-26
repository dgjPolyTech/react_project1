// import React from "react"
// import ReactDOM from "react-dom/client";
// npm이 아닌 local에서 실행할 때에는, 위의 import가 필요 없음. 오히려 있으면 버튼 안 나옴.

function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked':'Click Here');
}

/* id면 #, 클래스면 .(점)*/
const donContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(donContainer);
root.render(React.createElement(MyButton));