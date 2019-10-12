import React from 'react';

const SongDetail = ({song,dispatch}) => {
    return (
            <React.Fragment>
                <li onClick={(e)=>{dispatch({type:'REMOVE_SONG',id:song.id})}}>id : {song.id} title : {song.title} and author : {song.author}</li>

            </React.Fragment>
    );
}
 
export default SongDetail;