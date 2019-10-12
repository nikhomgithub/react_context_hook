import React, {useState, useEffect, useRef} from 'react';

const TimerHook = () => {
    const [timer,setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(()=>{
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1);
        },1000);
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[]);  //mean run on initial load only

    return(
        <React.Fragment>
            <h1>Hook Timer = {timer}</h1>
            <button onClick={()=>{clearInterval(intervalRef.current)}}>Clear - Hook Timer</button>
        </React.Fragment>
    );
}
 
export default TimerHook;