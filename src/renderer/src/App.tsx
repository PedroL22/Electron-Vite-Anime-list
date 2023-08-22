import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HashRouter } from 'react-router-dom'

import { Root } from '@renderer/routes/Root'

import { Header } from '@layout/Header'

export const App = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {' '}
      <HashRouter>
        <Header />
        <Root />
      </HashRouter>
    </QueryClientProvider>
  )
}
