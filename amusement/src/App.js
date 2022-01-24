import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Componnts/Home';
import AboutPage from './Componnts/AboutPage';
import Contact from './Componnts/Contact';
import Qa from './Componnts/Qa';
import NavBar from './Componnts/NavBar';
import Ticket from './Componnts/Ticket';
import InsertTicket from './Componnts/InsertTicket';
import UpdateTicket from './Componnts/UpdateTicket';
import SignUp from './Componnts/SignUp';
import Admin from './Componnts/Admin';
import AdminLogin from './Componnts/AdminLogin';
import CustomerPage from './Componnts/CustomerPage';
import AdminProfile from './Componnts/AdminProfile';
import ActivityList from './Componnts/ActivityList';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/admin' component={Admin} />
          <Route path='/about' component={AboutPage} /> 
          <Route path='/contact' component={Contact} />
          <Route path='/qa' component={Qa} />
          <Route path='/ticket' component={Ticket} />
          <Route path='/insertticket' component={InsertTicket} />
          <Route path='/updateticket' component={UpdateTicket} />
          <Route path='/signup' component={SignUp} />
          <Route path='/admin' component={Admin} />
          <Route path='/adminlogin' component={AdminLogin} />
          <Route path='/customer' component={CustomerPage} />
          <Route path='/adminprofile' component={AdminProfile} />
          <Route path='/activitylist' component={ActivityList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;