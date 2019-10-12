import React,{useState, useEffect,} from 'react';
import NewSongForm from './NewSongForm';
import TimerClass from './TimerClass';
import TimerHook from './TimerHook';


//https://www.youtube.com/watch?v=ScT4ElKd6eo
const Songlist = () => {
    const [songs, setSongs]=useState([
        {title:'Song 1',artist:'Jame',id:1},
        {title:'Song 2',artist:'Peter',id:2},
        {title:'Song 3',artist:'Kate',id:3}
    ])

    const [age,setAge]=useState(20);

    const addSong = (title,artist) =>{
        setSongs([...songs,{title,artist, id: Math.floor(Math.random() * 1000)}])
    }

    useEffect(()=>{
        alert(`Welcome`)
    },[])

    return (  
        <div className="song-list">
            <TimerClass />
            <TimerHook />
            <ul>
               { songs.map(song=>
                    <li key={song.id}>title : {song.title} artist : {song.artist}</li>
                )}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>{setAge(age+1)}}>{`Add Age to ${age}`}</button>
            
        </div>
    );
}

export default Songlist;
