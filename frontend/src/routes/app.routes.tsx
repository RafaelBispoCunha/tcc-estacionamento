import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LayoutContent from '../components/Layout'
import EntradaPage from '../pages/Entrada'
import SaidaPage from '../pages/Saida'
import VagasPage from '../pages/Vagas'
import FuncionarioPage from './../pages/Funcionario';


const Routes = () => {
   return (
      <Switch>
         <LayoutContent>



            
            <Route exact path="/entrada" component={EntradaPage} />
            <Route exact path="/saida" component={SaidaPage} />
            <Route exact path="/vagas" component={VagasPage} />
            <Route exact path="/funcionario" component={FuncionarioPage} />



         </LayoutContent>
      </Switch>
   )
}

export default Routes;