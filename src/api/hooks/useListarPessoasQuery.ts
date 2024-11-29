import { useQuery } from "@tanstack/vue-query";
import { useListarPessoas } from "../persons/persons";

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