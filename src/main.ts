import { createApp } from 'vue'
import { registerLicense } from '@syncfusion/ej2-base';

import App from './App.vue'
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-vue-grids';
import { VueQueryPlugin } from '@tanstack/vue-query'

import './lang';
import { createPinia } from 'pinia';
const pinia = createPinia()

const app = (createApp(App));

app.component('ejs-grid', GridComponent);
app.component('e-columns', ColumnsDirective);
app.component('e-column', ColumnDirective);
app.use(GridPlugin);
app.use(VueQueryPlugin)
registerLicense(import.meta.env.VUE_APP_SYNCFUSION_LICENSE);
app.use(pinia);
app.mount('#app')
