import React, {createContext, useState}from 'react';

export const BookContext = createContext();

const BookContextProvider  = (props) => {
    const [books,setBooks]=useState([
        {title:'Book1', id:1},
        {title:'Book2', id:2},
        {title:'Book3', id:3},
    ]);

    return (  
        <BookContext.Provider value={{books}}>
        {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider ;