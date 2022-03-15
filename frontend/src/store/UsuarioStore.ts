import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { IUsuario } from '../model/models';

export class UsuarioStore {
   @observable private _usuarios: IUsuario[] = []
   @observable private _usuario: IUsuario = {} as IUsuario;
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._usuarios = [];
      this._usuario = {} as IUsuario;
      this.error = undefined;
      this.loading = false;
   }

   @action
   getUsuarios = async () => {
      this._usuarios = [];
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<IUsuario[]>(`/usuario`);
         
         runInAction(() => {
            this._usuarios = data;
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
   getUsuario = async (id: number) => {
      this._usuario = {} as IUsuario;
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<IUsuario>(`/usuario/${id}`);
         
         runInAction(() => {
            this._usuario = data;
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
   postUsuario= async (params: IUsuario) => {
      this.error = undefined
      this.loading = true;
     
      try {
         await api.post(`/usuario`, params)
      
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
   putUsuario= async (params: IUsuario) => {
      this.error = undefined
      this.loading = true;
      
      try {
         await api.put(`/usuario/${params.id}`, params)
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
   deleteUsuario = async (id: number) => {
      this.error = undefined
      this.loading = true;
  
      try {
         await api.delete(`/usuario/${id}`)
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
   get usuarios() {
      return this._usuarios;
   }

   @computed
   get usuario() {
      return this._usuario;
   }
}