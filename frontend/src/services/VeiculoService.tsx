import api from "../api/api";

class VeiculoService {
   
   get(placa: string) {
      return api.get(`/veiculos?placa=${placa}`);
    }

   getAll() {
      return api.get(`/veiculos`);
    }
   create(data: any) {
      return api.post("/veiculos", data);
   }
   
  
}

export default new VeiculoService();