import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home/Home'
import Navigation from './Components/Home/Navigation'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route path='/About' component={About}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
