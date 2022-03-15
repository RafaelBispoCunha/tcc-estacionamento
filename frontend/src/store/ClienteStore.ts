import { action, computed, observable, runInAction } from 'mobx'
import api from '../api/api';
import { ICliente } from '../model/models';

export class ClienteStore {
   @observable private _clientes: ICliente[] = []
   @observable private _cliente: ICliente = {} as ICliente;
   @observable public error: string | undefined = undefined;
   @observable public loading: boolean = false;

   @action
   clean() {
      this._clientes = [];
      this._cliente = {} as ICliente;
      this.error = undefined;
      this.loading = false;
   }

   @action
   getClientes = async () => {
      this._clientes = [];
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<ICliente[]>(`/cliente`);
         console.log("DATA")
         console.log(data)
         runInAction(() => {
            this._clientes = data;
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
   getCliente = async (id: number) => {
      this._cliente = {} as ICliente;
      this.error = undefined
      this.loading = true;
      try {
         const { data } = await api.get<ICliente>(`/cliente/${id}`);
         console.log("DATA")
         console.log(data)
         runInAction(() => {
            this._cliente = data;
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
   postCliente= async (params: ICliente) => {
      this.error = undefined
      this.loading = true;
     
      try {
         await api.post(`/cliente`, params)
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
   putCliente= async (params: ICliente) => {
      this.error = undefined
      this.loading = true;
      console.log('params')
      console.log(params)
      try {
         await api.put(`/cliente/${params.id}`, params)
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
   deleteCliente= async (id: number) => {
      this.error = undefined
      this.loading = true;
  
      try {
         await api.delete(`/cliente/${id}`)
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
   get clientes() {
      return this._clientes;
   }

   @computed
   get cliente() {
      return this._cliente;
   }
}