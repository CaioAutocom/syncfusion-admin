import { ref } from 'vue';

export function useApiRequest<T>() {
  const isPending = ref(false);
  const isError = ref(false);
  const error = ref<Error | null>(null);
  const data = ref<T | null>(null);

  const request = async (apiCall: () => Promise<T>) => {
    isPending.value = true;
    isError.value = false;
    error.value = null;

    try {
      data.value = await apiCall();
    } catch (err) {
      isError.value = true;
      error.value = err as Error;
    } finally {
      isPending.value = false;
    }
  };

  return {
    isPending,
    isError,
    error,
    data,
    request,
  };
}