import React from 'react';

function Input({data, onClick}){
    return (
        <input type="button" placeholder="Input" onClick={() => {onClick(data);}} value="Click" />
    );
}

export default Input;