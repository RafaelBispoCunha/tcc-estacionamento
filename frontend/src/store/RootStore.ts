import { EntradaStore } from "./EntradaStore";
import { VagaStore } from './VagaStore';
import { VeiculoStore } from './VeiculoStore'
import { UsuarioStore } from './UsuarioStore';

export class RootStore{
   entradaStore = new EntradaStore();
   vagaStore = new VagaStore();
   veiculoStore = new VeiculoStore();
   usuarioStore = new UsuarioStore();
}