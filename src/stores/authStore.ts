import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuthenticated: false
    }),
    actions: {
       setIsAuthenticated(authenticated: boolean){
        this.isAuthenticated = authenticated;
       }
    },
});