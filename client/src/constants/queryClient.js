import { QueryClientProvider, QueryClient } from "react-query";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";

const MAX_AGE = 24000;

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnMount: false,
         refetchOnWindowFocus: false,
         refetchOnReconnect: false,
         staleTime: 0,
         retry: true,
         cacheTime: MAX_AGE,
      },
   },
});

const localStoragePersistor = createWebStoragePersistor({
   storage: window.localStorage,
});

persistQueryClient({
   queryClient,
   persistor: localStoragePersistor,
});

export { QueryClientProvider, queryClient };
