import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { ISaida, IEntrada } from '../model/models';

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
   postSaida = async (params: IEntrada) => {
      this.error = undefined
      this.loading = true;
     
      try {
         await api.post(`/saida`, params)
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