import { NavBar } from "./components/NavBar/NavBar";
import './styles/styles.scss'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// import { useState } from "react";



function App() {


  // const [montar, setMontar] = useState(true)

  return (
    <>
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
         
          <Route path="*">
              {/* <h1 className="texto-centrado">404 page not found</h1> */}
              <Redirect to ="/"/>          
          </Route>

        </Switch>

      </BrowserRouter>

      
    {/* 
      <button onClick={()=> {setMontar(!montar)} }> Montar/Desmontar </button>
      { montar && <ClickTracker/> } */}    
    </>
   
  );
}

export default App;
