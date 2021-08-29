import api from "../api/api";

class VeiculoService {
   
   get(placa: string) {
      return api.get(`/veiculos?placa=${placa}`);
    }

   getAll() {
      return api.get(`/estacionados`);
    }
   create(data: any) {
      return api.post("/estacionados", data);
   }
   
  
}

export default new VeiculoService();