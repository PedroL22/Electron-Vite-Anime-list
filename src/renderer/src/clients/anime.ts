import axios from 'axios'

export const fetchAnimeList = async () => {
  const data = await axios.get('https://kitsu.io/api/edge/anime')

  return data.data
}
