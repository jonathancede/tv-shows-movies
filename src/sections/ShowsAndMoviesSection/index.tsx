"use client"

import { useEffect, useState } from "react"
import Section from "@/components/Sections"
import SubsectionSelector, { SubsectionsType } from "@/components/SubsectionSelector"
import Input from "@/components/Input"
import tmdb_api_service from "@/services/tmdb_api_service"
import MovieCard from "@/components/MovieCard"
import { ListItemsWrapper, ShowsAndMoviesSectionWrapper } from "./styles"

const SUBSECTIONS_IDS = {
  TV_SHOWS: "tv_shows_1",
  MOVIES: "movies_2",
}

const ShowsAndMoviesSection: React.FC = () => {
  const [subsectionSelected, setsubsectionSelected] = useState<String>(SUBSECTIONS_IDS.TV_SHOWS)
  const [items, setItems] = useState<Array<any>>([])

  const placeHolderInput: string =
    subsectionSelected === SUBSECTIONS_IDS.TV_SHOWS ? "Search for TV shows" : "Search for movies"
  const hasItemsToRender = items && !!items.length

  useEffect(() => {
    fetchItems()
  }, [subsectionSelected])

  const fetchItems = async () => {
    const isTVShows: boolean = subsectionSelected === SUBSECTIONS_IDS.TV_SHOWS
    let data = null

    if (isTVShows) data = await tmdb_api_service.getPopularTVShows("en-US", 1)
    else data = await tmdb_api_service.getPopularMovies("en-US", 1)

    setItems(data?.results ?? [])
  }

  const sections: Array<SubsectionsType> = [
    { id: SUBSECTIONS_IDS.TV_SHOWS, label: "TV Shows", onClick: () => setsubsectionSelected(SUBSECTIONS_IDS.TV_SHOWS) },
    { id: SUBSECTIONS_IDS.MOVIES, label: "Movies", onClick: () => setsubsectionSelected(SUBSECTIONS_IDS.MOVIES) },
  ]

  return (
    <Section>
      <ShowsAndMoviesSectionWrapper>
        <SubsectionSelector sections={sections} selected={subsectionSelected} />
        {/* TODO: pendiente de insertar onChange para renderizar las búsquedas si da tiempo */}
        <Input iconType="search" variant="large" type="text" placeholder={placeHolderInput} />
        {hasItemsToRender && (
          <ListItemsWrapper>
            {items.map(({ id, backdrop_path, name, title, vote_average }) => (
              <MovieCard
                key={`movie-card-item-${id}`}
                image_path={backdrop_path}
                title={name ?? title}
                vote_average={vote_average}
              />
            ))}
          </ListItemsWrapper>
        )}
      </ShowsAndMoviesSectionWrapper>
    </Section>
  )
}

export default ShowsAndMoviesSection
