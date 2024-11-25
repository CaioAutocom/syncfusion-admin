<template>
    <div id="app" class="teste">
        <ejs-grid :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' :allowGrouping='true' :pageSettings='pageSettings' >
          <e-columns>
            <e-column field='nome' headerText='Nome' textAlign='Right' width=90></e-column>
            <e-column field='apelido' headerText='Apelido' width=120></e-column>
            <e-column field='cpfCnpj' headerText='CPF/CNPJ' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ativo' headerText='Status' textAlign='Right' format='C2' width=90></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import {onMounted, provide, ref} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate } from "@syncfusion/ej2-vue-grids";

import { getAuthentication } from "../services/authentication/authentication";
import { getPersons } from '../services/persons/persons'

const request = {
  email: "eduprog@gmail.com",
  password: "123Pa$$word!",
  tenantId: "eduprog",
};
  let data = ref([]);

onMounted(async () => {
  const t = auth();
  getAllPerson(t);
});

async function auth(){
  try {
    const authService = getAuthentication();
    const response = await authService.autenticarOUsuário(request);

    console.log(response);
    if (response){
      localStorage.setItem("SyncToken", response.token);
    }
  } catch (error) {
    console.log("aaaaaa" + error);
  }
}
async function getAllPerson(token){
  try {

    const personService = getPersons();
    const getAllPersonRequestBuilder = {
          PageNumber:  1,
          PageSize: 25,
          SearchTerm: '',
          SortColumn:  '',
          ReverseOrder: false,
          Enable: true
      };
    const response = await personService.listarPessoas(getAllPersonRequestBuilder);
    if  (response){
      data.value = response.items;
    }
    console.log("pessoaaa" + data);
  } catch (error) {
     console.log("bbbbb" + error);
  }
}
    
      const pageSettings = { pageSize: 5 };
      const footerSum = ()=> {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {data: {}}};}
            })
          }
      }
  provide('grid',  [Page, Sort, Filter, Group, Aggregate]);
</script>
<style>
 .teste{
  width: 700px;
  margin: auto;
 }
</style>