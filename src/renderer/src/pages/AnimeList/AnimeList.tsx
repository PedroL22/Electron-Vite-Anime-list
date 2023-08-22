import { useFetchAnimeList } from '@hooks/anime'
import { Container } from '@layout/Container'

export const AnimeList = () => {
  const { data, isLoading, isError } = useFetchAnimeList()

  if (isLoading) {
    return (
      <Container>
        <div className='mt-28 flex min-h-screen justify-center'>Carregando...</div>
      </Container>
    )
  }

  if (isError) {
    return (
      <Container>
        <div className='mt-28 flex min-h-screen justify-center'>Erro</div>
      </Container>
    )
  }

  return (
    <Container>
      <div className='mt-28 flex min-h-screen justify-center'>
        <div
          className='flex h-fit min-h-[35rem] w-full max-w-screen-lg items-center justify-center rounded-3xl bg-gray-100
        p-16 shadow-xl'
        >
          <table className='w-full table-fixed border-[1px] border-gray-400'>
            <thead>
              <tr>
                <th className='border-[1px] border-gray-400'>Cover</th>
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
                      src={anime.attributes.coverImage?.original}
                      alt=''
                      className='mx-auto flex h-32 w-44 object-cover'
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
        </div>
      </div>
    </Container>
  )
}
