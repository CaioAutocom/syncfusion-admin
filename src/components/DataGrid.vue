<template>
    <div id="app" class="teste">
        <!-- <h1 v-if="isAuthPending">Autenticando...</h1> -->
      <ejs-grid 
        :dataSource="data?.data" 
        :allowPaging='dataGridStore?.gridConfig?.allowPaging' 
        :allowSorting='dataGridStore?.gridConfig?.allowSorting' 
        :allowGrouping='dataGridStore?.gridConfig?.allowGrouping' 
        :pageSettings='dataGridStore?.pageSettings' 
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
import { computed, onMounted, provide, ref, toRefs, unref, watch } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { CreateAccessTokenRequest } from "../interfaces/api/Identity";
import { useAutenticarOUsuario } from "../../src/api/authentication/authentication"
import { useDataGridStore } from "../stores/dataGridStore"
import { useAuthMutation } from "../api/hooks/useAuthMutation";
import { useListarPessoasQuery } from "../api/hooks/useListarPessoasQuery";
import { useListarPessoas } from "../api/persons/persons"


const dataGridStore = useDataGridStore();
const pessoasQuery  = useListarPessoas();
// bugado
provide('grid',  [Page, Sort, Group, Aggregate, Toolbar, Search]);
</script>
<style>
 .teste{
  width: 900px;
  margin: auto;
 }
</style>