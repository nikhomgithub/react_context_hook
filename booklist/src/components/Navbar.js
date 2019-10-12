import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const {books,sBook}=useContext(BookContext)
    
    return ( 
        <div className="nav">
            
            <h1>Ninja Reading List</h1> 
            <h2>{sBook.id}</h2>
            <p>We have {books.length} unit of books</p>
        </div>
    );
}
 
export default Navbar;
