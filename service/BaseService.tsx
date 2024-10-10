
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_API
});

export class BaseService {

    url: string;

    constructor(url: string){
        this.url = url;
    }

    // Listar todos os usuários
    ListarTodos() {
        return axiosInstance.get(this.url); // Removi o .then incompleto
    }

    // Inserir um novo usuário
    inserir(objeto: any) {
        return axiosInstance.post(this.url, objeto);
    }

    // Alterar um usuário existente
    alterar(id: number, objeto: any) {
        return axiosInstance.put(`${this.url}/${id}`, objeto); // Corrigida a interpolação da URL
    }

    // Excluir um usuário
    excluir(id: number) {
        return axiosInstance.delete(`${this.url}/${id}`); // Corrigida a interpolação da URL
    }
}
