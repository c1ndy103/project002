import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import LearnMorePage from "./LearnMorePage";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div><Router>
    <Route exact path="/" component={LoginPage} />
    <Route exact path = "/main" component = {MainPage} />
    <Route exact path = "/learn" component = {LearnMorePage} />
  </Router></div>
    
  );
}

export default App;
