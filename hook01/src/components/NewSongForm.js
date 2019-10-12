import React, {useState, useRef,useEffect} from 'react';

const NewSongForm = ({addSong}) => {
    const titleRef=useRef();
    const artistRef=useRef();
    const submitRef=useRef();

    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')

    useEffect(()=>{
        titleRef.current.focus();
    },[]) //initial load

    const titleKeydown =(e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            artistRef.current.focus(); 
        }
    }

    const artistKeydown =(e)=>{
        if(e.key === "Enter"){
            e.preventDefault();
            submitRef.current.focus();
        }
    }

    const submitKeydown =(e)=>{
        e.preventDefault();
        addSong(title,artist)
        setTitle('');
        setArtist('');
    }

    return (  
        <form >
           <input
                ref={titleRef}
                type = 'text' 
                placeholder = 'title' 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title}
                onKeyDown={titleKeydown}
 
            />
            <input
                ref={artistRef}
                type = 'text' 
                placeholder = 'artist' 
                onChange={(e)=>setArtist(e.target.value)} 
                value={artist}
                onKeyDown={artistKeydown}
    
            />
           <button 
                ref={submitRef}
                onClick={submitKeydown}
            >add song</button>
        </form>
    );
}
 

 
export default NewSongForm;


