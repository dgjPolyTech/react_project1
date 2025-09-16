import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "루피",
        content: "나는 해적왕이 될꺼야",
        url: "https://avatar.iran.liara.run/public/job/farmer/male"
    },
    {
        name: "검은수염",
        content: "제하하하하",
        url: "https://avatar.iran.liara.run/public/job/doctor/male"
    },
    {
        name: "사카즈키",
        content: "명구",
        url: "https://avatar.iran.liara.run/public/job/police/male"
    }
];

function CommentList(){
    return(
        <div>
            {
                comments.map((comment) =>{
                        return (
                            <Comment name={comment.name} comment={comment.content} url={comment.url} />
                        );
                    }
                )
            }
        </div>
    );
}

export default CommentList;