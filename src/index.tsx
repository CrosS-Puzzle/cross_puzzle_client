import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import persistStore from 'redux-persist/es/persistStore'
import { PersistGate } from 'redux-persist/integration/react'

import store from './store/index.ts'
const persistor = persistStore(store)

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
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={querytClient}>
        <BrowserRouter>
          <React.StrictMode>
            <ModalProvider />
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
)
