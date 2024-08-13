import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <QueryClientProvider client={new QueryClient()}>
    <App />
  </QueryClientProvider>
  </Provider>,
)
