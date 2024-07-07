import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import MenuHook from "./hooks/MenuHook";
import ItemHook from "./hooks/ItemHook";
import ErrPage from "./404page";
import ItemForm from "./itemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);
  

  /*useEffect(() => {
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
  }, []); */

  useEffect(() => {
    async function getData() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false)
    }
    getData();
  }, [])

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
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <MenuHook snacks={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <ItemHook items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <MenuHook drinks={drinks} title="Drinks"/>
            </Route>
            <Route path="/drinks/:id">
              <ItemHook items={drinks} cantFind="/drinks"/>
            </Route>
            <Route path="/add">
              <ItemForm />
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
