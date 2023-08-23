import React from 'react';
import Form from './components/Form';
import './App.css';
const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <p>
          Aquí haremos nuestro TO-DO list
        </p>
        <Form/>
      </div>
    </div>
  );
}
export default App;