<template>
    <div id="app" class="teste">
        <h1 v-if="isAuthPending">Autenticando...</h1>
        <h1 v-if="isLoadingFiltradas">Carregando registros...</h1>
        <ejs-grid 
        :dataSource="pessoasFiltradas?.items" 
        :allowPaging='true' 
        :allowSorting='true' 
        :allowGrouping='true' 
        :pageSettings='pageSettings' 
        :actionBegin="onActionBegin"
        @sort='onSort'
        :toolbar='toolbarOptions'
        :loadingIndicator='loadingIndicator'
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
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { useAutenticarOUsuario } from "../../src/api/authentication/authentication"
import { useListarPessoas } from "../api/persons/persons"
import { useApiRequest } from "../composables/useApiRequest"

const queryClient = useQueryClient();

const request: CreateAccessTokenRequest = {
  email: "eduprog@gmail.com",
  password: "123Pa$$word!",
  tenantId: "eduprog",
};

const pageNumber = ref(1)
const pageSize = ref('500')
const searchTerm = ref('')
const sortColumn = ref('')
const reverseOrder = ref(false)
const loadingIndicator = { indicatorType: 'Shimmer' };
const toolbarOptions = ['Search'];

let loadedData = ref([]);

onMounted(()=>{
  fazerLogin(request);
});

const fazerLogin = (request: CreateAccessTokenRequest) => {
  authMutate({data:request});
};

const { mutate: authMutate, isPending: isAuthPending, isError: isAuthError, data : authData, error: authError} = useAutenticarOUsuario({
  mutation: {
    onSuccess: (response) => {
      localStorage.setItem("SyncToken", response.token);
    },
    onError: (error) => {
      console.log("erro", error);
      localStorage.removeItem("SyncToken");
    }
  }
});

const { data: pessoasFiltradas, isLoading: isLoadingFiltradas } = useListarPessoas({
        PageNumber: pageNumber.value,
        PageSize: parseInt(pageSize.value),
        SearchTerm: searchTerm.value,
        SortColumn: sortColumn.value,
        ReverseOrder: reverseOrder.value,
        Enable: true
    },
    // {
    //     query: {
    //         refetchInterval: 5000,
    //     }
    // }
    )
const onPageChange = (args) => {
  pageNumber.value = args.currentPage
  pageSize.value = args.pageSize

}

const onSort = (args) => {
  sortColumn.value = args.columnName
  reverseOrder.value = args.direction === 'descending'
}

const onSearch = (term) => {
  searchTerm.value = term
  // pageNumber.value = 1 // Resetar para primeira página ao buscar
}
const onActionBegin = (args) => {
  if (args.requestType === 'paging') {
   
  }
};

  let pageSettings = ref({ pageSize: 25, pageSizes: [25, 50, 75, 100], pageCount: pessoasFiltradas?.value?.totalPages,  });
  provide('grid',  [Page, Sort, Group, Aggregate, Toolbar, Search]);
</script>
<style>
 .teste{
  width: 900px;
  margin: auto;
 }
</style>