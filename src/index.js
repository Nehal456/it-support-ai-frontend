import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Make sure this path matches your CSS file

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello, Tailwind CSS!</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
