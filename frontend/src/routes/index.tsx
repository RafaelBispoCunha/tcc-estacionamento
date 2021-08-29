import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import EntradaPage from '../pages/Entrada'


const Routes = () => {
   return (
      <Router >
         <Switch>

            <Route path={"/home"} render={() => <></>} />
            <Route exact path="/entrada" component={EntradaPage} />

         </Switch>
      </Router>
   )
}

export default Routes;