import React from 'react';
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Card from './components/Navbar/Card';

function App() {
  return (
   <>

    <h1>How are you</h1>

      {/* <Navbar/> */}
      <Card 
      title="Card Title"
      body='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.

      '/>

   </>
  );
}

export default App;
