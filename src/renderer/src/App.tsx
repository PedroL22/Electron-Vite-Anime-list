import { BrowserRouter } from 'react-router-dom'

import { Root } from '@renderer/routes/Root'

import { Header } from '@layout/Header'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Root />
    </BrowserRouter>
  )
}
