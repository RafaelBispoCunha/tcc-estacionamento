import api from "../api/api";

class VagaService {
   getAll() {
      return api.get("/vaga");
   }

   create(data: any) {
      return api.post("/vaga", data);
   }

   update(data: any) {
      return api.put(`/vaga/${data.id}`, data);
   }

   delete(id: number) {
      return api.delete(`/vaga/${id}`);
   }


   findById(id: string) {
      return api.get(`/vaga?id=${id}`);
   }

}
export default new VagaService();