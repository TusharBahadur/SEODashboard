import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import TodoForm from './components/TodoForm';
import Results from './components/Results';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TodoForm />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;