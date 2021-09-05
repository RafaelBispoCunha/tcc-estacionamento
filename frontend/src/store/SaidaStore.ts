import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { ISaida } from '../model/models';

export class SaidaStore {
   @observable private _saidas: ISaida[] = []
   @observable private _saida: ISaida = {} as ISaida;
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._saidas = [];
      this._saida = {} as ISaida;
      this.error = undefined;
      this.loading = false;
   }

   @action
   getSaidas = async () => {
      this._saidas = [];
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<ISaida[]>(`/estacionados`);
         console.log("DATA")
         console.log(data)
         runInAction(() => {
            this._saidas = data;
            this.loading = false;
         })
      } catch (error) {
         runInAction(() => {
            this.error = error
            this.loading = false;
         })
      }
   }

   @action
   getSaida = async (id: number) => {
      this._saida = {} as ISaida;
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<ISaida>(`/estacionados/${id}`);
         console.log("DATA")
         console.log(data)
         runInAction(() => {
            this._saida = data;
            this.loading = false;
         })
      } catch (error) {
         runInAction(() => {
            this.error = error
            this.loading = false;
         })
      }
   }

   @action
   postSaida = async (params: ISaida) => {
      this.error = undefined
      this.loading = true;
     
      try {
         await api.post(`/estacionados`, params)
         runInAction(() => {
            this.loading = false;
         })
      } catch (error) {
         runInAction(() => {
            this.loading = false;
            this.error = error
         })
      }
   }

  

  
   @computed
   get saidas() {
      return this._saidas;
   }

   @computed
   get saida() {
      return this._saida;
   }
}