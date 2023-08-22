import { QueryFunctionContext } from '@tanstack/react-query'
import axios from 'axios'

export const fetchAnimeList = async (context: QueryFunctionContext) => {
  const [, page, search] = context.queryKey

  let URL = 'https://kitsu.io/api/edge/anime'

  if (search) {
    URL = `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=${page}&filter[text]=${search}`
  }

  const data = await axios.get(URL)

  return data.data
}
