import {  TokenResponse } from "../../interfaces/api/Identity";
import { useAutenticarOUsuario } from "../authentication/authentication";

  export function useAuthMutation(){
    const mutation  = useAutenticarOUsuario({
        mutation: {
          onSuccess: (response: TokenResponse) => {
            if(response.token)
            {
                localStorage.setItem("SyncToken", response.token);
            }            
          },
          onError: (error) => {
            console.log("erro de login:", error);
            localStorage.removeItem("SyncToken");
          }
        }
      });
      return {
        authMutate: mutation.mutate, 
        isAuthError: mutation.isError, 
        authData: mutation.data, 
        authError: mutation.error
    };
}