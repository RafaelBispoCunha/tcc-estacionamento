import { EntradaStore } from "./EntradaStore";
import { VagaStore } from './VagaStore';
import { VeiculoStore } from './VeiculoStore'

export class RootStore{
   entradaStore = new EntradaStore();
   vagaStore = new VagaStore();
   veiculoStore = new VeiculoStore();
}