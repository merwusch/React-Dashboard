import React, { useState } from 'react';

const TextboxAndButton = () => {
 const [textboxText, setTextboxText] = useState('');
 const [message, setMessage] = useState('');

 const handleChange = (e) => {
    setTextboxText(e.target.value);
 };

 const handleSubmit = () => {
    setMessage(textboxText);
    alert(textboxText);
 };

 return (
    <div>
      <input type="text" value={textboxText} onChange={handleChange} />
      <button onClick={handleSubmit}>Click</button>
    </div>
 );
};

export default TextboxAndButton;