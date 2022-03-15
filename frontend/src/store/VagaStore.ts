import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { IVaga } from '../model/models';

export class VagaStore {
   @observable private _vagas: IVaga[] = []
   @observable private _vaga: IVaga = {} as IVaga;
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._vagas = [];
      this._vaga = {} as IVaga;
      this.error = undefined;
      this.loading = false;
   }

   @action
   getVagas = async () => {
      this._vagas = [];
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<IVaga[]>(`/vaga`);
         
         runInAction(() => {
            this._vagas = data;
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
   getVaga = async (id: number) => {
      this._vaga = {} as IVaga;
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<IVaga>(`/vaga/${id}`);
         
         runInAction(() => {
            this._vaga = data;
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
   postVaga = async (params: IVaga) => {
      this.error = undefined
      this.loading = true;
     
      try {
         await api.post(`/vaga`, params)
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
   putVaga = async (params: IVaga) => {
      this.error = undefined
      this.loading = true;
      
      try {
         await api.put(`/vaga/${params.id}`, params)
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
   deleteVaga = async (id: number) => {
      this.error = undefined
      this.loading = true;
  
      try {
         await api.delete(`/vaga/${id}`)
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
   get vagas() {
      return this._vagas;
   }

   @computed
   get vaga() {
      return this._vaga;
   }
}