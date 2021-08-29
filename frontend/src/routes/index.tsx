import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import EntradaPage from '../pages/Entrada'
import SaidaPage from '../pages/Saida'
import VagasPage from '../pages/Vagas'
import FuncionarioPage from './../pages/Funcionario';

const Routes = () => {
   return (
      <Router >
         <Switch>

            <Route path={"/home"} render={() => <></>} />
            <Route exact path="/entrada" component={EntradaPage} />
            <Route exact path="/saida" component={SaidaPage} />
            <Route exact path="/vagas" component={VagasPage} />
            <Route exact path="/funcionario" component={FuncionarioPage} />

         </Switch>
      </Router>
   )
}

export default Routes;