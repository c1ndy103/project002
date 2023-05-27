import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div><Router>
    <Route exact path="/" component={LoginPage} />
  </Router></div>
    
  );
}

export default App;
