import api from "../api/api";

class SaidaService {
   getAll() {
      return api.get("/saida");
   }

   create(data: any) {
      return api.post("/saida", data);
   }

   findById(id: string) {
      return api.get(`/saida?id=${id}`);
   }

}
export default new SaidaService();