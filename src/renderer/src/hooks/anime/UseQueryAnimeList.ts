import { useQuery } from '@tanstack/react-query'

import { fetchAnimeList } from '@clients/anime'

import { Anime } from '@entities/AnimeEntity'

export const useFetchAnimeList = (page: number) => {
  return useQuery<{ data: Anime[] }>(['ANIME-LIST', page], fetchAnimeList)
}
