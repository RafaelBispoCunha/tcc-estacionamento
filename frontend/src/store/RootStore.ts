import { EntradaStore } from "./EntradaStore";
import { VagaStore } from './VagaStore';

export class RootStore{
   entradaStore = new EntradaStore();
   vagaStore = new VagaStore();
}