import { defineStore } from 'pinia';
import { ListarPessoasParams } from '../interfaces/api/Identity';

export const useDataGridStore = defineStore('dataGridStore', {
    state: () => ({
        paginationRequest: {
            pageNumber: 1,
            pageSize: 15,
            searchTerm: '',
            sortColumn: '',
            reverseOrder: false,
            enable: true
          } as ListarPessoasParams,
    }),
    actions: {
        setPageNumber(page: number) {
            this.paginationRequest.PageNumber = page;
        },
        setPageSize(size: number) {
            this.paginationRequest.PageSize = size;
        },
        setSearchTerm(term: string) {
            this.paginationRequest.SearchTerm = term;
        },
        setSortColumn(column: string) {
            this.paginationRequest.SortColumn = column;
        },
        setReverseOrder(reverse: boolean) {
            this.paginationRequest.ReverseOrder = reverse;
        },
    },
});