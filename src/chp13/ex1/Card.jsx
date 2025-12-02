import React from "react";

function Card(props){
    const {title, children} = props;
    // 이런 식으로도 가능은 함.
    // const title = props.title;
    // const children = props.children;

    return(
        <div>
            {<h1>title</h1>}
            {children}
        </div>
    );
}

export default Card;