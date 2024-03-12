import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import store from './store/index.ts'

import App from './App.tsx'

import './index.css'

const querytClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <QueryClientProvider client={querytClient}>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>,
)
