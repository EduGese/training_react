import { useState } from 'react'
import { InputTitle } from './components/InputTitle';
import { Title } from './components/Title';


import './App.css'

function App() {
  //States
  let word = '';
 const [title, setTitle] = useState('Inserta aqui tu titulo');
 const [visiblePanel, changeVisibility] = useState(false);
 const [randomColor, setRandomColor] = useState([0,0,0]);
 
 //Functions
 
  const getLetters = (event)=>{
     word = event.target.value;
  }
  const clearInput = () => {
    document.querySelector('input').value = '';
  };
  const randomNumber = () => {
    return Math.floor(Math.random()*256);
  }

  const generateRGBRandomColor = () => {
    return [randomNumber(), randomNumber(), randomNumber()];
  }

//Handlers functions
  const handleTitleChange = () => {
    if(word){
      setTitle(word);
      clearInput();
      changeVisibility(false);
      setRandomColor(generateRGBRandomColor);
    }
  };
  const handleDeleteTitle = () => {
    setTitle('Inserta aqui tu titulo');
    
  };
  
  

  return (
    <>
      <Title title={title} randomColor={randomColor}/>
      <button onClick={()=>{changeVisibility(!visiblePanel) }}>Change</button><br />
      { visiblePanel && 
      <>
      <InputTitle getLetters={getLetters} clearInput={clearInput}></InputTitle>

       <br /><br /><br /><br /><br /><br />
       <button onClick={handleTitleChange} className="change-title">Insertar titulo</button>
       <button onClick={handleDeleteTitle}>Borrar titulo</button>
       </>
        }
    
      
    </>
  )
}

export default App
