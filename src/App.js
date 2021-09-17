import logo from './logo.svg';
import './App.css';
import Hompage from './Pages/Homepage';
import {Route,Switch} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'

function App() {
  return (

    <div className="App">
        <Switch>
          <Route exact path="/" component={Hompage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        </Switch>
    </div>
    
  );
}

export default App;
