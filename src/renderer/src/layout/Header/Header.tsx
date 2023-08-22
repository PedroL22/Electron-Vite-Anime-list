import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='fixed flex h-20 w-screen justify-center bg-blue-600 text-xl font-medium text-white'>
      <nav className='flex w-full max-w-screen-xl items-center justify-between px-4'>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'border-b-[1px] border-b-white' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to='/anime-list'
          className={({ isActive }) => (isActive ? 'border-b-[1px] border-b-white' : '')}
        >
          List
        </NavLink>
      </nav>
    </header>
  )
}
