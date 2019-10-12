import React, { Component } from 'react';

class TimerClass extends Component {
    interval;
    state = {  
        timer:0
    }
    
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState(prevState=>({timer:prevState.timer+1}))      
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() { 
        return (
            <React.Fragment>
                <h1>
                Class Timer = {this.state.timer}
                </h1>
                <button onClick={()=>{clearInterval(this.interval)}}>Clear- Class Timer</button>
            </React.Fragment>
            
          );
    }
}
 
export default TimerClass;