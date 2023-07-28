import Login from "./Components/Seguridad/Login";
import theme from "./theme/theme";
import { ThemeProvider } from "@material-ui/core";
import AppBarMenu from "../src/Components/Navigation/AppBarMenu"
import RegisterUser from "./Components/Seguridad/RegisterUser";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Productos from "./Components/pantalla/Productos";
import DetalleProducto from "./Components/pantalla/DetalleProducto";
import CarritoCompras from "./Components/pantalla/CarritoCompras";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBarMenu/>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/registrar" component={RegisterUser}/>
          <Route exact path="/" component={Productos}/>
          <Route exact path="/detalleProducto/:id" component={DetalleProducto}/>
          <Route exact path="/carrito" component={CarritoCompras}/>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
