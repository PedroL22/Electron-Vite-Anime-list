import axios from 'axios'

export const fetchAnimeList = async () => {
  const data = await axios.get('https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0')

  return data.data
}
