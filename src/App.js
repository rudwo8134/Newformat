import './App.css';
import {HashRouter as Router} from 'react-router-dom'
import Home from './pages';


function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;