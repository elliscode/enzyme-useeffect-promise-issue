import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [title, setTitle] = useState('Initial Title');

  useEffect(() => {
    const longFetch = async () => {
      await new Promise(resolve => {
        setTimeout(() => {
          setTitle('State change title');
        }, 2000);
      });
    }
    longFetch();
  }, []);

  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  );
}

export default App;
