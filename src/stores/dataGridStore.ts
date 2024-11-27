import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useDataGridStore = defineStore('dataGrid', () => {
  // Pagination
  let pageNumber = 1;
  let pageSize = 25;
  let pageSizes = [25, 50, 75, 100]

  // Search and Filtering
  let searchTerm = ''
  let sortColumn = ''
  let reverseOrder = false

  // Loading States
  const isLoading = false

  // Grid Configuration
  const gridConfig = {
    allowPaging: true,
    allowSorting: true,
    allowGrouping: true,
    height: 700,
    loadingIndicator: { indicatorType: 'Shimmer' },
    toolbarOptions: ['Search']
  }

  // Computed Getters
  const pageSettings = computed(() => ({
    pageSize: pageSize,
    pageSizes: pageSizes,
    pageNumber: pageNumber
  }))

  // Actions
  function setPageNumber(page: number) {
    pageNumber = page
  }

  function setPageSize(size: number) {
    pageSize = size
  }

  function setSearchTerm(term: string) {
    searchTerm = term
  }

  function setSorting(column: string, descending: boolean = false) {
    sortColumn = column
    reverseOrder = descending
  }

  function resetGridState() {
    pageNumber = 1
    searchTerm = ''
    sortColumn = ''
    reverseOrder = false
  }

  return {
    // State
    pageNumber,
    pageSize,
    pageSizes,
    searchTerm,
    sortColumn,
    reverseOrder,
    isLoading,
    gridConfig,

    // Computed
    pageSettings,

    // Actions
    setPageNumber,
    setPageSize,
    setSearchTerm,
    setSorting,
    resetGridState
  }
})