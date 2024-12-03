<template>
    <div id="app" class="teste">
      <ejs-grid 
        ref="grid"
        id="PagingGrid"
        :dataSource="pessoasData?.items ?? []" 
        :allowPaging='true' 
        :allowSorting='true' 
        :allowGrouping='true' 
        :pageSettings='pageSettings' 
        :toolbar='true'
        :actionBegin="onActionBegin"
        height="400"> 
         <template  :v-slot:pagerTemplate="pessoasData">
        <div class="e-pagertemplate">
          <div class="col-lg-12 control-section">
            <div class="content-wrapper">
            </div>
          </div>
          <div id="totalPages" class="e-pagertemplatemessage" style="margin-top:5px;margin-left:30px;border:none;display:inline-block">
            <span class="e-pagenomsg">{{ pessoasData?.pageIndex }} of {{ pessoasData?.totalPages }} pages ({{ pessoasData?.totalItems }} items)</span>
          </div>
        </div>
      </template>

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

const dataGridStore = useDataGridStore();
const { data: pessoasData, isSuccess } = useListarPessoas(dataGridStore.paginationRequest);

const grid = ref(null);

const pageSettings = { 
  pageSizes: ['25', '50','75', '50000', '100000', '200000', '300000'], 
  pageSize: dataGridStore.paginationRequest.PageSize
};

const onActionBegin = (args) => {
if (args.requestType === 'paging') {
    if(isNaN(args.pageSize)){
      args.pageSize = undefined;
    }
    dataGridStore.setPageSize(args.pageSize);
    dataGridStore.setPageNumber(args.currentPage);
  }

  if (args.requestType === 'sorting'){
    dataGridStore.setSortColumn(args.columnName);
    dataGridStore.setReverseOrder(args.direction === 'Descending')
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