import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LayoutContent from '../components/Layout'
import EntradaPage from '../pages/Entrada'
import SaidaPage from '../pages/Saida'
import VagasPage from '../pages/Vagas'
import UsuarioPage from '../pages/Usuario';
import HomePage from './../pages/Home/HomePage';
import ConsultaPage from '../pages/Consulta/ConsultaPage';

const Routes = () => {
   return (
      <Switch>
         <LayoutContent>

            <Route exact path="/home" component={HomePage} />
            <Route exact path="/entrada" component={EntradaPage} />
            <Route exact path="/saida" component={SaidaPage} />
            <Route exact path="/vaga" component={VagasPage} />
            <Route exact path="/consulta" component={ConsultaPage} />
            <Route exact path="/usuario" component={UsuarioPage} />

         </LayoutContent>
      </Switch>
   )
}

export default Routes;