// src/api/queryClient.ts
import { QueryClient } from '@tanstack/react-query';
import apiConfig from './apiConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data dianggap fresh selama 5 menit
      refetchOnWindowFocus: true, // Refetch saat jendela fokus
    },
  },
});

// Fungsi untuk melakukan fetch data
const fetcher = async (url: string) => {
  const response = await fetch(url + `?api_key=${apiConfig.apiKey}`);
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
};

// Ekspor QueryClient dan fetcher
export { queryClient, fetcher };