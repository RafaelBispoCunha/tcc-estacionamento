import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { IEntrada } from '../model/models';

export class EntradaStore {
   @observable private _entradas: IEntrada[] = []
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._entradas = [];
      this.error = undefined;
      this.loading = false;
   }

   @action
   getEntradas = async () => {
      this._entradas = [];
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<IEntrada[]>(`/entrada`);
         console.log("Entrada")
         console.log(data)
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
   postEntrada = async (params: any) => {
      this.error = undefined
      this.loading = true;
      try {
         await api.post(`/entrada`)
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
}