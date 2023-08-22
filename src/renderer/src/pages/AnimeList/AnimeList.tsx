import { useState } from 'react'

import { useFetchAnimeList } from '@hooks/anime'

import { Container } from '@layout/Container'

import Placeholder from '@assets/images/placeholder.png'

export const AnimeList = () => {
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const { data, isLoading, isError } = useFetchAnimeList(page, search)

  if (isLoading) {
    return (
      <Container>
        <div className='mt-20 flex min-h-screen justify-center'>
          <div
            className='my-10 flex h-fit min-h-[35rem] w-full max-w-screen-lg flex-col items-center justify-center
        rounded-3xl bg-gray-100 px-10 py-6 shadow-xl'
          >
            <div className='flex w-full justify-end'>
              <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='mb-6 rounded-md border-[1px] border-gray-400 p-3 outline-none focus:border-[1px] focus:border-blue-600'
              />
            </div>
            Loading...
          </div>
        </div>
      </Container>
    )
  }

  if (isError) {
    return (
      <Container>
        <div className='mt-20 flex min-h-screen justify-center'>
          <div
            className='my-10 flex h-fit min-h-[35rem] w-full max-w-screen-lg flex-col items-center justify-center
          rounded-3xl bg-gray-100 px-10 py-6 shadow-xl'
          >
            <div className='flex w-full justify-end'>
              <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='mb-6 rounded-md border-[1px] border-gray-400 p-3 outline-none focus:border-[1px] focus:border-blue-600'
              />
            </div>
            An error has occurred.
          </div>
        </div>
      </Container>
    )
  }

  if (!data?.data.length) {
    return (
      <Container>
        <div className='mt-20 flex min-h-screen justify-center'>
          <div
            className='my-10 flex h-fit min-h-[35rem] w-full max-w-screen-lg flex-col items-center justify-center
      rounded-3xl bg-gray-100 px-10 py-6 shadow-xl'
          >
            <div className='flex w-full justify-end'>
              <input
                type='text'
                placeholder='Pesquisar'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='mb-6 rounded-md border-[1px] border-gray-400 p-3 outline-none focus:border-[1px] focus:border-blue-600'
              />
            </div>
            Sem resultados.
          </div>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className='mt-20 flex min-h-screen justify-center'>
        <div
          className='my-10 flex h-fit min-h-[35rem] w-full max-w-screen-lg flex-col items-center justify-center
        rounded-3xl bg-gray-100 px-10 py-6 shadow-xl'
        >
          <div className='flex w-full justify-end'>
            <input
              type='text'
              placeholder='Search'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='mb-6 rounded-md border-[1px] border-gray-400 p-3 outline-none focus:border-[1px] focus:border-blue-600'
            />
          </div>

          <table className='w-full table-fixed border-[1px] border-gray-400'>
            <thead>
              <tr>
                <th className='border-[1px] border-gray-400'>Cover image</th>
                <th className='border-[1px] border-gray-400'>Title</th>
                <th className='border-[1px] border-gray-400'>Type</th>
                <th className='border-[1px] border-gray-400'>Start Date</th>
                <th className='border-[1px] border-gray-400'>End Date</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((anime) => (
                <tr key={anime.id}>
                  <td>
                    <img
                      src={anime.attributes.coverImage?.original ?? Placeholder}
                      alt={`${anime.attributes.canonicalTitle} cover image`}
                      className='mx-auto flex h-32 w-48 object-cover'
                    />
                  </td>
                  <td className='border-[1px] border-gray-400 text-center'>{anime.attributes.canonicalTitle}</td>
                  <td className='border-[1px] border-gray-400 text-center'>{anime.attributes.showType}</td>
                  <td className='border-[1px] border-gray-400 text-center'>{anime.attributes.startDate}</td>
                  <td className='border-[1px] border-gray-400 text-center'>{anime.attributes.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className='flex space-x-3 pt-6'>
            <button
              onClick={() => setPage(0)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              1
            </button>
            <button
              onClick={() => setPage(1)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              2
            </button>
            <button
              onClick={() => setPage(2)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              3
            </button>
            <button
              onClick={() => setPage(3)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              4
            </button>
            <button
              onClick={() => setPage(4)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              5
            </button>
            <button
              onClick={() => setPage(5)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              6
            </button>
            <button
              onClick={() => setPage(6)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              7
            </button>
            <button
              onClick={() => setPage(7)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              8
            </button>
            <button
              onClick={() => setPage(8)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              9
            </button>
            <button
              onClick={() => setPage(9)}
              className='bg-gray-300 p-4 transition-all hover:bg-gray-400 active:bg-gray-500'
            >
              10
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
