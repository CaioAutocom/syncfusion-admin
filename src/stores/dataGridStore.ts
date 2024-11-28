import { defineStore } from 'pinia';

export const useDataGridStore = defineStore('dataGridStore', {
    state: () => ({
        pageNumber: 1,
        pageSize: 10,
        searchTerm: '',
        sortColumn: '',
        reverseOrder: false,
        enable: true
    }),
    actions: {
        setPageNumber(page: number) {
            this.pageNumber = page;
        },
        setPageSize(size: number) {
            this.pageSize = size;
        },
        setSearchTerm(term: string) {
            this.searchTerm = term;
        },
        setSortColumn(column: string) {
            this.sortColumn = column;
        },
        setReverseOrder(reverse: boolean) {
            this.reverseOrder = reverse;
        },
    },
});