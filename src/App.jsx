import './App.css';
import { Router } from '@reach/router'
import Search from './components/Search'
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <Search/>
      <Router>
        <Result path = '/:category/:id'></Result>
      </Router>
    </div>
  );
}

export default App;