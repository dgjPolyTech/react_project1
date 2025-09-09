import React from "react";
import UserInfo from "./UserInfo";
import './Comment.css';

// user 정보 배열
const users = [
    {
        name: "경진",
        comment: "졸리다",
        avatarUrl: "https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_1280.jpg"
    },
    {
        name: "경진2",
        comment: "배고프다",
        avatarUrl: "https://media.istockphoto.com/id/533130811/ko/%EC%82%AC%EC%A7%84/%EB%8C%80%EB%B0%B1%EC%83%81%EC%96%B4-%EC%9B%83%EC%9C%BC%EC%84%B8%EC%9A%94.jpg?s=2048x2048&w=is&k=20&c=mOAyHU_-wrmmtOnKsxFFrWNOp52H6dUT-qJRe8yz31M="
    },
    {
        name: "경진3",
        comment: "집가고싶다",
        avatarUrl: "https://cdn.pixabay.com/photo/2021/11/25/18/55/octopus-6824384_1280.jpg"
    },
];

function Comment(props){
    const currentDate = new Date();
    return(
        <div>
            {
                users.map((user) => {
                    return(
                        <div className="comment">
                            <UserInfo user={user} />
                            <div className="context-text">
                                {user.comment}
                            </div>
                            <div className="comment-date">
                                {currentDate.toDateString()}
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default Comment;