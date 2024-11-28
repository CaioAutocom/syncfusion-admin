import { useQuery } from "@tanstack/vue-query";
import { useListarPessoas } from "../persons/persons";
import { useAuthStore } from "../../stores/authStore";

export function useListarPessoasQuery(){
    const query = useQuery({
        queryKey: ['listarPessoas'],
        queryFn: () => useListarPessoas(),
        // keepPreviousData: true,
        // staleTime: 5000
      })
    return{
        ...query,
        data: query.data
    }
} 
