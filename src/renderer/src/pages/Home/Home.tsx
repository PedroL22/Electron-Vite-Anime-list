import { useNavigate } from 'react-router-dom'

import { Container } from '@layout/Container'

import { Button } from '@components/Home/Button'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div className='flex flex-col items-center'>
          <p className='bg-gradient-to-r from-orange-400 to-red-700 bg-clip-text text-8xl font-medium text-transparent'>
            Welcome to
          </p>
          <h1 className='bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-8xl font-medium text-transparent'>
            Anime list
          </h1>
        </div>

        <div className='mt-8'>
          <Button
            name="Let's go!"
            bgColor='bg-blue-700'
            bgHover='bg-blue-800'
            bgActive='bg-blue-900'
            onClick={() => navigate('/anime-list')}
          />
        </div>
      </div>
    </Container>
  )
}
