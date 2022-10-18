import './App.css';
import './views/signIn/signIn';
import SignIn from './views/signIn/signIn';
import {Routes, Route } from "react-router-dom";
import SignUp from './views/signUp/signUp';
import Congratulation from './views/congrats/congratulation';


function App() {
  return (
    
    <div className="container">
      <Routes> <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/congratulation" element={<Congratulation />} /></Routes>
          
      
    </div>
  );
}

export default App;
