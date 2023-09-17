import React, { useState } from 'react';


import { Link } from 'react-router-dom';
const TodoForm = () => {
  const [text, setText] = useState('');
  const onInputChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
};

  return (
    <div className=''>
      <form className='form' onSubmit={onFormSubmit}>
        <input
          placeholder='Enter a URL'
          className='input'
          onChange={onInputChange}
          value={text}
        /> 
        <Link to="/results" state={text}>
        <button type='submit' className='btn btn-dark' style={{marginLeft:"50px",marginTop:"30px"}}>Analyze</button>
        </Link>
   
      </form>
    </div>
  );
};

export default TodoForm;





