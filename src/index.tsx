import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import store from './store/index.ts'

import App from './App.tsx'

import './index.css'
import ModalProvider from './features/modal/ModalProvider.tsx'

const querytClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 1, // 1 hours
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={querytClient}>
      <BrowserRouter>
        <React.StrictMode>
          <ModalProvider />
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
)
