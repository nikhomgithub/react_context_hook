import React, {useState,createContext} from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books,setBooks] = useState([])

    const [sBook,setSBook]=useState('')
  
    
    const addBook=(title,author,id)=>{
        setBooks([...books,{
            title:title,
            author:author,
            id: id
        }])
    }

    const removeBook = (id)=>{
        setBooks(books.filter(book=>book.id!==id))
    }
    

    const selectBook = async(id)=>{
        const result= await(books.filter(book=>book.id===id))
        setSBook(...result)
    }

    
    return ( 
        <BookContext.Provider value={{books,addBook,removeBook,selectBook,sBook}}>
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;