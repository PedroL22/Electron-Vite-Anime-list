import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AnimeList } from '@pages/AnimeList'
import { Home } from '@pages/Home'

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/anime-list',
      element: <AnimeList />,
    },
  ])

  return <RouterProvider router={router} />
}
