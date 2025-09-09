import React from "react";
import Book from './Book';

const books = [
    {
        title:"The Art of React",
        author: "김민주",
        coverImage: "https://image.yes24.com/goods/151041836/XL"
    },
    {
        title:"Learning javascript myself",
        author: "윤인성",
        coverImage: "https://image.yes24.com/goods/105863903/XL"
    },
    {
        title:"clean code",
        author: "zzz",
        coverImage: "https://image.yes24.com/goods/11681152/XL"
    }
];

function BookList(){
    return(
        <div className={"bookListWrapper"}>
            {
                books.map((book) => {
                  return(
                      <Book
                          title={book.title}
                          author={book.author}
                          coverImage={book.coverImage}
                      />
                  )
                })
            }
        </div>
    );
}

export default BookList;