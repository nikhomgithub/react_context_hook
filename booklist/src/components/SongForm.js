import React, {useContext,useState} from 'react';
import { SongContext } from '../contexts/SongContext';

const SongForm = () => {
    const {dispatch} = useContext(SongContext)

    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const id=(Math.floor(Math.random() * 1000))
        dispatch({type:'ADD_SONG',song:{
            title:title,author:author,id:id
        }})
        setTitle('');
        setAuthor('');
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="song title" value={title} onChange={e=>setTitle(e.target.value)}/>
            <input type="text" placeholder="song author" value={author} onChange={e=>setAuthor(e.target.value)}/>
            <input type="submit" value="Add Song"/>
        </form>
     );
}
 
export default SongForm;