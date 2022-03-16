import { EntradaStore } from "./EntradaStore";
import { VeiculoStore } from './VeiculoStore'
import { UsuarioStore } from './UsuarioStore';
import { SaidaStore } from './SaidaStore';

export class RootStore{
   entradaStore = new EntradaStore();
   veiculoStore = new VeiculoStore();
   usuarioStore = new UsuarioStore();
   saidaStore = new SaidaStore();
}