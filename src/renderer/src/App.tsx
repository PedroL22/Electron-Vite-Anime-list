import { HashRouter } from 'react-router-dom'

import { Root } from '@renderer/routes/Root'

import { Header } from '@layout/Header'

export const App = () => {
  return (
    <HashRouter>
      <Header />
      <Root />
    </HashRouter>
  )
}
