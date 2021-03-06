import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './componentes/General/Header/Header'
import Home from './componentes/General/Home/Home'
import Footer from './componentes/General/Footer/Footer'
import Error from './componentes/General/Error/Error'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
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
