import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
