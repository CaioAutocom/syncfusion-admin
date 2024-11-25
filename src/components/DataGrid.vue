<template>
    <div id="app" class="teste">
        <ejs-grid :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' :allowGrouping='true' :pageSettings='pageSettings' >
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
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
  const data = ref([]);

onMounted(async () => {
  const t = auth();
  getAllPerson(t);
});

async function auth(){
  try {
    const authService = getAuthentication();
    const response = await authService.autenticarOUsuário(request);

    console.log(response);
    // if (response){
    //   localStorage.setItem("SyncToken", response.data.token);
    // }
  } catch (error) {
    console.log("aaaaaa" + error);
  }
}
async function getAllPerson(token){
  try {

    const personService = getPersons();
    data = personService.response;
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