import React from 'react';

const Input = ({type,onKeyDown,placeholder,onChange,value},ref) => {
    return ( 
        <input
            ref={ref}
            type={type}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
     );
}

const forwardInput = React.forwardRef(Input)
 
export default forwardInput;