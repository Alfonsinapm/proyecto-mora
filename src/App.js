import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './componentes/General/Header/Header'
import Home from './componentes/General/Home/Home'
import Footer from './componentes/General/Footer/Footer'
import Error from './componentes/General/Error/Error'
import ItemListContainer from './componentes/Productos/ItemListContainer'
import ItemDetailContainer from './componentes/Productos/ItemDetailContainer'
import './index.css'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/categoria/:categ">
        <ItemListContainer/>
        </Route>
        <Route path="/item/:itemid">
          <ItemDetailContainer/>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
