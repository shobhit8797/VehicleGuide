import 'bootstrap/dist/css/bootstrap.min.css';
import Catelog from './components/Catelog';
import { Route, Link } from 'react-router-dom';
import Nav from './components/main_nav';
import Home from './components/Home';
import Model3 from './Tesla/Model_3/main';
import ModelS from './Tesla/Model_S/main';
import ModelX from './Tesla/Model_X/main';
import ModelY from './Tesla/Model_Y/main';
import Phantom from './components/Phantom';
import Lexus from './components/Lexus';
import Bentley from './components/bentley';
import Compass from './components/compass';
import Ford from './components/ford';
import Fortuner from './components/fortuner';
import Hyundai from './components/Hyundai';
import Maserati from './components/Maserati';
import Mercedes from './components/Mercedes';
import Suzuki from './components/suzuki';
import Minicooper from './components/minicooper';
import RoyaceDawn from './components/Royce_dawn';
import Porsche from './components/porsche';
import './css/catelog_css.css';
import Contact from './components/contactus';
import Login from './components/SignUP';

function App() {
  return (
    <div className="App">
      {/* Sedan SUV Hatchback Convertibles Premium Luxury Off road Sports Popular */}
      <Nav />
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/electric" component={Catelog} />
        <Route exact path="/suv" component={Catelog} />
        <Route exact path="/hatchback" component={Catelog} />
        <Route exact path="/sedan" component={Catelog} />
        <Route exact path="/convertible" component={Catelog} />
        <Route exact path="/premium" component={Catelog} />
        <Route exact path="/luxury" component={Catelog} />
        <Route exact path="/offRoad" component={Catelog} />
        <Route exact path="/sports" component={Catelog} />
        <Route exact path="/popular" component={Catelog} />
        <Route exact path="/model3" component={Model3} />
        <Route exact path="/modelS" component={ModelS} />
        <Route exact path="/modelY" component={ModelY} />
        <Route exact path="/modelX" component={ModelX} />
        <Route exact path="/phantom" component={Phantom} />
        <Route exact path="/lexus" component={Lexus} />
        <Route exact path="/bentley" component={Bentley} />
        <Route exact path="/compass" component={Compass} />
        <Route exact path="/ford" component={Ford} />
        <Route exact path="/fortuner" component={Fortuner} />
        <Route exact path="/hyundai" component={Hyundai} />
        <Route exact path="/maserati" component={Maserati} />
        <Route exact path="/mercedes" component={Mercedes} />
        <Route exact path="/suzuki" component={Suzuki} />
        <Route exact path="/minicooper" component={Minicooper} />
        <Route exact path="/royacedawn" component={RoyaceDawn} />
        <Route exact path="/porsche" component={Porsche} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
      </div>
    </div>
  );
}

export default App;
