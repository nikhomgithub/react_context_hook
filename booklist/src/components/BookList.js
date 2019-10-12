import React,{useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetail from './BookDetail';

const BookList = () => {
    const {books,removeBook,selectBook} = useContext(BookContext)

    return ( 
        <div className="book-list">
            <ul>
                {books.map(book=><BookDetail key={book.id} book={book} removeBook={removeBook} selectBook={selectBook}/>)}
            </ul>
        </div>
    );
}
 
export default BookList;