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
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, AggregateDirective as EAggregate, AggregatesDirective as EAggregates, Page, Sort, Filter, Group, Aggregate } from "@syncfusion/ej2-vue-grids";
      const data = [
          { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
          { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
          { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
          { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
          { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
          { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
          { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
          { OrderID: 10255, CustomerID: 'aa', Freight: 148.33 },
          { OrderID: 10256, CustomerID: 'ff', Freight: 13.97 },
            { OrderID: 10253, CustomerID: 'gg', Freight: 58.17 },
          { OrderID: 10254, CustomerID: 'gg', Freight: 22.98 },
          { OrderID: 10255, CustomerID: 'gg', Freight: 148.33 },
          { OrderID: 10256, CustomerID: 'gg', Freight: 13.97 }
      ];
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