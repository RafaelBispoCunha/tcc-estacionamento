import { action, computed, observable, runInAction } from 'mobx'
import { IVeiculo } from '../model/models';
import api from '../api/api';

export class VeiculoStore {
   @observable private _veiculo: IVeiculo[] = []
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._veiculo = []
      this.error = undefined;
      this.loading = false;
   }
   @action
   getVeiculo = async (placa: string) => {
      this._veiculo = [];
      this.error = undefined
      this.loading = true;
      
      try {
         const { data } = await api.get<IVeiculo[]>(`/veiculos?placa=${placa}`);
         
         runInAction(() => {
            this._veiculo = data;
            this.loading = false;
         })
      } catch (error) {
         runInAction(() => {
            this.error = error
            this.loading = false;
         })
      }
   }
   @computed
   get veiculo() {
      return this._veiculo;
   }
}
