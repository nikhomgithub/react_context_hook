import React from 'react';

const BookDetail = ({book,removeBook,selectBook}) => {
    return (
            <React.Fragment>
                <p style={{display:"inline-block"}} onClick={(e)=>removeBook(book.id)} > -X-  </p>
                <li style={{display:"inline-block"}} onClick={(e)=>selectBook(book.id)} >id : {book.id} title : {book.title} and author : {book.author}</li>
                <br></br>
            </React.Fragment>
    );
}
 
export default BookDetail;