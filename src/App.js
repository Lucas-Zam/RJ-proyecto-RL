import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartScreen } from "./components/CartScreen/CartScreen";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Checkout } from "./components/Checkout/Checkout";
// import { Redirect } from 'react-router-dom'
import { CartProvider } from "./context/CartContext";
import { UIContextProvider } from "./context/UIContext";
import './styles/styles.scss'

function App() {


    return (
        <>

        <UIContextProvider>

            <CartProvider>

                <BrowserRouter>
        
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <ItemListContainer/>
                        </Route>

                        <Route exact path="/category/:catId">
                            <ItemListContainer/>
                        </Route>

                        <Route exact path="/detail/:itemId">
                            <ItemDetailContainer/>
                        </Route>

                        <Route exact path="/cart">
                                <CartScreen/>
                        </Route>
                        
                        <Route exact path="/checkout">
                            <Checkout/>
                        </Route>

                        <Route path="*">
                            <h2 className="texto-centrado">404 page not found</h2>
                        </Route>

                    </Switch>

                </BrowserRouter>

            </CartProvider>

        </UIContextProvider>
      
        </>
    );
}

export default App;
