import React , {useEffect,useRef,useState} from 'react';
import Input from './Input'

const NewForm = () => {
    const [name,setName] = useState('')
    const [lastname,setLastname] = useState('')
    const [id,setId] = useState('')

    const ref1=useRef();
    const ref2=useRef();
    const ref3=useRef();

    useEffect(()=>{
        ref1.current.focus();
    },[])

    const clickRef1=(e)=>{
      if(e.key==="Enter"){
        e.preventDefault();
        ref2.current.focus();
      }
    }

    const clickRef2=(e)=>{
      if(e.key==="Enter"){
        e.preventDefault();
        ref3.current.focus();
      }
    }

    const clickRef3=(e)=>{
      if(e.key==="Enter"){
        e.preventDefault();
        alert('All Done')
      }
    }

    const onChangeRef1=(e)=>{
        setName(e.target.value)
    }

    const onChangeRef2=(e)=>{
        setLastname(e.target.value)
    }

    const onChangeRef3=(e)=>{
        setId(e.target.value)
    }
    return ( 
        <div>
            <h1>{`name : ${name}  /lastname : ${lastname}  /id:${id}`}</h1>
            <Input ref={ref1} type="text" onKeyDown = {clickRef1} placeholder={"name"} onChange={onChangeRef1} value={name}/>
            <Input ref={ref2} type="text" onKeyDown = {clickRef2} placeholder={"lastname"} onChange={onChangeRef2} value={lastname}/>
            <Input ref={ref3} type="text" onKeyDown = {clickRef3} placeholder={"id"} onChange={onChangeRef3} value={id}/>
       </div>
     );
}
 
export default NewForm;