import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import AddTree from './components/Trees/AddTree';
import Navbar from './components/Navbar/Navbar';
import Trees from './components/Trees/Trees'
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Map from './components/Map/Map';


function App() {
  return (
    <>
<BrowserRouter>
<Navbar />
<Switch>
  <Route exact path='/addtree' component={AddTree}/>

  <Route exact path='/trees' component={Trees}/>
  <Route exact path='/register' component={RegisterUser}/>
  <Route exact path='/login' component={LoginUser} />
  <Route exact path='/' component={Home}/>
  <Route exact path='/Profile' component={Profile}/>
  <Route exact path='/map' component= {Map}/>
</Switch>
</BrowserRouter>

    </>
  );
}

export default App;
