import React from 'react'

const Content = () => {
      const hanldeNameChange = () => {
    const names = ['Alice', 'Bob', 'Charlie'];  
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const handleClick = () => {
    console.log(`Clicked`);
    
  }
  const handleClick2 = (name) => {
     console.log(`${name} was Clicked` );
  }
    const handleClick3 = (e) => {
        console.log(e.target)               // logs the <button>
        console.log(e.target.textContent)   // logs the button text
    }



  return (
    <main>
        <p onDoubleClick={handleClick}>
             Hello {hanldeNameChange()}!
        </p> 
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => handleClick2('Dave')}>Click me</button>
        <button onClick={(e) => handleClick3(e)}>Click me</button>
    </main>
  )
}

export default Content