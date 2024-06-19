import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MenuHook from "./hooks/MenuHook";
import ItemHook from "./hooks/ItemHook";
import AddItem from "./addItem";
import ErrPage from "./404page";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);

  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home items={snacks} />
            </Route>
            <Route exact path="/snacks">
              <MenuHook items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <ItemHook items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <MenuHook items={drinks} title="Drinks"/>
            </Route>
            <Route path="/drinks/:id">
              <ItemHook items={drinks} cantFind="/drinks"/>
            </Route>
            <Route path="/add">
              <AddItem />
            </Route>
            <Route>
              <ErrPage />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
