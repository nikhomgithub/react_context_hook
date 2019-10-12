import React,{useContext,useState,useRef,useEffect} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [id,setId]=useState('')

    const {addBook,sBook}=useContext(BookContext)

    useEffect(()=>{
        ref1.current.focus();
    },[])

    const handleKeyDown1=(e)=>{
        if(e.key==="Enter"){
            e.preventDefault();
            ref2.current.focus();
        }
    }

    const handleKeyDown2=(e)=>{
        if(e.key==="Enter"){
            e.preventDefault();
            ref3.current.focus();
        }
    }

    const handleKeyDown3=async(e)=>{
        e.preventDefault();
        ref1.current.focus();
        const tempid=(Math.floor(Math.random() * 1000))
        setId(tempid)
    }

    useEffect(()=>{
        if(id){
            addBook(title,author,id);
            setTitle('');
            setAuthor('');
            setId('');
        }
    },[id])

    return (  
        <form>
            <input ref={ref1} onKeyDown={handleKeyDown1} type="text" placeholder="book title" value={title} onChange={e=>setTitle(e.target.value)}/>
            <input ref={ref2} onKeyDown={handleKeyDown2} type="text" placeholder="book author" value={author} onChange={e=>setAuthor(e.target.value)}/>
            <button ref={ref3} onClick={handleKeyDown3}>Add Book</button>
        </form>
    );
}
 
export default BookForm;