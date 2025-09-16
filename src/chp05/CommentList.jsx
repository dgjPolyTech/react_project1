import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "루피",
        content: "나는 해적왕이 될꺼야"
    },
    {
        name: "검은수염",
        content: "제하하하하"
    },
    {
        name: "사카즈키",
        content: "명구"
    }
];

function CommentList(){
    return(
        <div>
            {
                Comment.map((comment) =>{
                        return (
                            <Comment name={Comment.name} comment={Comment.content} />
                        );
                    }
                )
            }
        </div>
    );
}

export default CommentList;