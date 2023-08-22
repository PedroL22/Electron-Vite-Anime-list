import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex h-10 w-screen justify-center bg-blue-600 text-lg font-medium text-white'>
      <nav className='flex w-full max-w-screen-xl items-center justify-between px-4'>
        <Link to='/'>Home</Link>
        <Link to='/anime-list'>Lista de animes</Link>
      </nav>
    </header>
  )
}
