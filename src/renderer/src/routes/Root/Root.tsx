import { Route, Routes } from 'react-router-dom'

import { AnimeList } from '@pages/AnimeList'
import { Home } from '@pages/Home'

export const Root = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='/anime-list'
        element={<AnimeList />}
      />
    </Routes>
  )
}
