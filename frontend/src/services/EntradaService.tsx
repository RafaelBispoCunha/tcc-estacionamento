import api from "../api/api";

class EntradaService {
   getAll() {
      return api.get("/entrada");
    }
  
   create(data: any) {
      return api.post("/entrada", data);
   }
  
}

export default new EntradaService();