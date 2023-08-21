import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import ConvertComp from './components/ConvertComp';

const queryClient = new QueryClient({
  defaultOptions: {
    query: {
      staleTime: 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className='bg-slate-600 flex-1'>
        <ConvertComp />
        <StatusBar style='light' />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
