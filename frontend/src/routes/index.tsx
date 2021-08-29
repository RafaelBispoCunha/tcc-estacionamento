import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import EntradaPage from '../pages/Entrada'
import SaidaPage from '../pages/Saida'


const Routes = () => {
   return (
      <Router >
         <Switch>

            <Route path={"/home"} render={() => <></>} />
            <Route exact path="/entrada" component={EntradaPage} />
            <Route exact path="/saida" component={SaidaPage} />

         </Switch>
      </Router>
   )
}

export default Routes;