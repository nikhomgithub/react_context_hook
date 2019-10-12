import React, {createContext,useReducer,useEffect} from 'react';

export const SongContext = createContext();

const SongContextProvider = (props) => {

    const songReducer = (state,action)=>{
        switch(action.type){
            case 'ADD_SONG':
                return [...state,{
                    title:action.song.title,
                    author:action.song.author,
                    id: action.song.id
                }]
            case 'REMOVE_SONG':
                return state.filter(song=>song.id!==action.id)
            default:
                return state
        }
    }
    
    const [songs,dispatch] = useReducer(songReducer,[],()=>{
        const localData= localStorage.getItem('songs')
        return localData?JSON.parse(localData):[]
    });
        

    useEffect(()=>{
        localStorage.setItem('songs',JSON.stringify(songs))
    },[songs])

    return (  
        <SongContext.Provider value={{songs,dispatch}}>
            {props.children}
        </SongContext.Provider>
    );
}
 
export default SongContextProvider;


