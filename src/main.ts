import { createApp } from 'vue'
import { registerLicense } from '@syncfusion/ej2-base';

import App from './App.vue'
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';

import './lang';

const app = (createApp(App));

app.component('ejs-grid', GridComponent);
app.component('e-columns', ColumnsDirective);
app.component('e-column', ColumnDirective);
app.use(GridPlugin);
registerLicense(import.meta.env.VUE_APP_SYNCFUSION_LICENSE);

app.mount('#app')
