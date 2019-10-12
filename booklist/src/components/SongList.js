import React ,{useContext}from 'react';
import{SongContext} from '../contexts/SongContext';
import SongDetail from './SongDetail'

const SongList = () => {
    const {songs,dispatch} = useContext(SongContext)

    return (
        <div className="book-list">
            <ul>
                {songs.map(song=><SongDetail key={song.id} song={song} dispatch={dispatch}/>)}
            </ul>
     </div>
      );
}
 
export default SongList;