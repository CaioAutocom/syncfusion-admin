<template>
    <div id="app" class="teste">
      <ejs-grid 
        ref="grid"
        id="PagingGrid"
        :dataSource="pessoasData?.items" 
        :allowPaging='true' 
        :allowSorting='true' 
        :allowGrouping='true' 
        :pageSettings='pageSettings' 
        :toolbar='true'
        :actionBegin="onActionBegin"
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
import { computed, onMounted, provide, ref, toRefs, unref, watch } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { useAutenticarOUsuario } from "../../src/api/authentication/authentication"
import { useDataGridStore } from "../stores/dataGridStore"
import { useAuthMutation } from "../api/hooks/useAuthMutation";
import { useListarPessoasQuery } from "../api/hooks/useListarPessoasQuery";
import { useListarPessoas } from "../api/persons/persons"
import { useQueryClient } from "@tanstack/vue-query";


const queryClient = useQueryClient();
const dataGridStore = useDataGridStore();
const pageSettings = { 
  pageSizes: ['25', '50','75', 'Todas'], 
  pageSize: dataGridStore.paginationRequest.PageSize, 
   };

const {data: pessoasData, isSuccess}  = useListarPessoas(dataGridStore.paginationRequest);
const grid = ref(null);


const onActionBegin = (args) => {
  if (args.requestType === 'paging') {
    dataGridStore.setPageSize(args.pageSize);
    dataGridStore.setPageNumber(args.currentPage);
    // grid.value.ej2Instances.pageSettings.pageCount = 17;
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