<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { jwtDecode } from 'jwt-decode';
import DataGrid from './components/DataGrid.vue'
import Login from './components/Login.vue'
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore();
const storedToken = localStorage.getItem("SyncToken");

if(storedToken){
    const decoded = jwtDecode(storedToken);
    const currentTime = Math.floor(Date.now() / 1000); // em segundos

    const expired  = decoded.exp < currentTime;
    authStore.setIsAuthenticated(!expired);                
};
</script>
<template >
  <VueQueryDevtools />

  <template v-if="!authStore.isAuthenticated">
    <Login/>  
  </template>
  <template v-else>
  <DataGrid />
  </template>
</template>

<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
