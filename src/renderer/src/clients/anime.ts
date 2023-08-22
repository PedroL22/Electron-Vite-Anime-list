import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'

export const fetchAnimeList = async (context: QueryFunctionContext) => {
  const [, page] = context.queryKey

  const data = await axios.get(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page}`)

  return data.data
}
