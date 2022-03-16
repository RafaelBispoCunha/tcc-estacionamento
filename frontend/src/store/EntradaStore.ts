import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { IEntrada } from '../model/models';

export class EntradaStore {
   @observable private _entradas: IEntrada[] = []
   @observable private _entrada: IEntrada = {} as IEntrada;
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._entradas = [];
      this._entrada =  {} as IEntrada;
      this.error = undefined;
      this.loading = false;
   }

   @action
   getEntradas = async () => {
      this._entradas = [];
      this.error = undefined
      this.loading = true

      try {

         const { data } = await api.get<IEntrada[]>(`/entrada`);
         
         runInAction(() => {
            this._entradas = data;
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
   getEntrada = async (id: string) => {
      this._entrada =  {} as IEntrada;
      this.error = undefined
      this.loading = true;
      
      try {

         const { data } = await api.get<IEntrada>(`/entrada?id=${id}`);
         
         runInAction(() => {
            this._entrada = data;
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
   postEntrada = async (params: IEntrada) => {
      this.error = undefined
      this.loading = true;
      
      try {
         
         await api.post(`/entrada`, params)

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

   @action
   deleteEntrada= async (id?: number) => {
      this.error = undefined
      this.loading = true;
  
      try {
         await api.delete(`/entrada/${id}`)
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
   get entradas() {
      return this._entradas;
   }
   @computed
   get entrada() {
      return this._entrada;
   }
}