import { BackTop, Layout } from "antd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import HomePage from "./components/Homepage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import ProductDetail from "./components/Products/ProductDetail";
import Products from "./components/Products/Products";


const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 20, width: "100%" }}>
            <Navbar />
          </Header>
          <Content>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/products" exact>
                <Products />
              </Route>
              <Route path="/products/:id" exact>
                <ProductDetail />
              </Route>
              <Route path="/cart" exact>
                <Cart />
              </Route>
            </Switch>
          </Content>
          <BackTop />
          <Footer
            style={{
              textAlign: "center",
              background: "#1e1e1e",
              color: "white",
              marginTop: "100px",
              textTransform: "uppercase"
            }}
          >
            All for learning
          </Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
