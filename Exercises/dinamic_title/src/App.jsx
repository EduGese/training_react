import { useState } from 'react'

import './App.css'

function App() {
  let word = '';
 const [title, setTitle] = useState('Inserta aqui tu titulo');
 
 
 const handleTitleChange = () => {
    setTitle(word);
  };
  const handleDeleteTitle = () => {
    setTitle('Inserta aqui tu titulo');
  };
  
  const getLetters = (event)=>{
     word = event.target.value;
  }
  const clearInput = () => {
    document.querySelector('input').value = '';
  };
  return (
    <>
      <h1>{title}</h1>
    
      <label>Inserta aqui tu titulo</label>
      <input type="text" onKeyUp={getLetters}/>

      <button onClick={clearInput}>Clear</button>
      <br /><br /><br /><br /><br /><br />
      <button onClick={handleTitleChange} className="change-title">Insertar titulo</button>
      <button onClick={handleDeleteTitle}>Borrar titulo</button>
    </>
  )
}

export default App
