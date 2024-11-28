<template>
    <div id="app" class="teste">
        <!-- <h1 v-if="isAuthPending">Autenticando...</h1> -->
        <h1 v-if="isLoading">Carregando registros...</h1>
        <ejs-grid 
        :dataSource="data?.data" 
        :allowPaging='dataGridStore?.gridConfig?.allowPaging' 
        :allowSorting='dataGridStore?.gridConfig?.allowSorting' 
        :allowGrouping='dataGridStore?.gridConfig?.allowGrouping' 
        :pageSettings='dataGridStore?.pageSettings' 
        :actionBegin="onActionBegin"
        @sort='onSort'
        :toolbar='dataGridStore?.gridConfig?.toolbarOptions'
        :loadingIndicator='dataGridStore?.loadingIndicator'
        height="700">
          <e-columns>
            <e-column field='nome' headerText='Nome' width=200></e-column>
            <e-column field='apelido' headerText='Apelido' width=120></e-column>
            <e-column field='cpfCnpj' headerText='CPF/CNPJ'  width=130></e-column>
            <e-column field='ativo' headerText='Status' textAlign='Right' width=90></e-column>
          </e-columns>
        </ejs-grid>
    </div>
   
</template>
<script lang="ts" setup>
import { onMounted, provide, ref, watch } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { CreateAccessTokenRequest } from "../interfaces/api/Identity";
import { useAutenticarOUsuario } from "../../src/api/authentication/authentication"
import {useDataGridStore} from "../stores/dataGridStore"
import { useAuthMutation} from "../api/hooks/useAuthMutation";
import {useListarPessoasQuery} from "../api/hooks/useListarPessoasQuery";
import { QueryClient, useQueryClient } from "@tanstack/vue-query";
import { listarPessoas } from "../api/persons/persons";

const queryClient = useQueryClient();
const dataGridStore = useDataGridStore();


const { authMutate } = useAuthMutation(); 

const credentials: CreateAccessTokenRequest = {
    email: "eduprog@gmail.com",
    password: "123Pa$$word!",
    tenantId: "eduprog",
  };

onMounted(() => {
  fazerLogin(credentials);
  const { data, isLoading} = useListarPessoasQuery();
});

const fazerLogin = (request: CreateAccessTokenRequest) => {
  authMutate({data: credentials});
};



const onPageChange = (args) => {
  dataGridStore.pageNumber = args.currentPage
  dataGridStore.pageSize = args.pageSize

}

const onSort = (args) => {
  dataGridStore.sortColumn = args.columnName
  dataGridStore.reverseOrder = args.direction === 'descending'
}

const onSearch = (term) => {
  dataGridStore.searchTerm = term
  // pageNumber.value = 1 // Resetar para primeira página ao buscar
}
const onActionBegin = (args) => {
  if (args.requestType === 'paging') {
   
  }
};

  
provide('grid',  [Page, Sort, Group, Aggregate, Toolbar, Search]);
</script>
<style>
 .teste{
  width: 900px;
  margin: auto;
 }
</style>