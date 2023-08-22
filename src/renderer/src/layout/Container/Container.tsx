import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <main className='flex justify-center bg-gray-200'>
      <div className='w-full max-w-screen-xl'>{children}</div>
    </main>
  )
}
