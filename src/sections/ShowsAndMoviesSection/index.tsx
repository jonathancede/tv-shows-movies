"use client"

import { useEffect, useState } from "react"
import Section from "@/components/Sections"
import SubsectionSelector, { SubsectionsType } from "@/components/SubsectionSelector"
import Input from "@/components/Input"
import tmdb_api_service from "@/services/tmdb_api_service"
import MovieCard from "@/components/MovieCard"
import { ListItemsWrapper, ShowsAndMoviesSectionWrapper } from "./styles"
import { ITEMS_TYPES } from "@/utils/constans"

const ShowsAndMoviesSection: React.FC = () => {
  const [subsectionSelected, setsubsectionSelected] = useState<String>(ITEMS_TYPES.TV_SHOW)
  const [items, setItems] = useState<Array<any>>([])

  const placeHolderInput: string =
    subsectionSelected === ITEMS_TYPES.TV_SHOW ? "Search for TV shows" : "Search for movies"
  const hasItemsToRender = items && !!items.length

  useEffect(() => {
    fetchItems()
  }, [subsectionSelected])

  const fetchItems = async () => {
    const isTVShows: boolean = subsectionSelected === ITEMS_TYPES.TV_SHOW
    let data = null

    if (isTVShows) data = await tmdb_api_service.getPopularTVShows("en-US", 1)
    else data = await tmdb_api_service.getPopularMovies("en-US", 1)

    setItems(data?.results ?? [])
  }

  const sections: Array<SubsectionsType> = [
    { id: ITEMS_TYPES.TV_SHOW, label: "TV Shows", onClick: () => setsubsectionSelected(ITEMS_TYPES.TV_SHOW) },
    { id: ITEMS_TYPES.MOVIE, label: "Movies", onClick: () => setsubsectionSelected(ITEMS_TYPES.MOVIE) },
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
                link={`/detail/${subsectionSelected}-${id}`}
              />
            ))}
          </ListItemsWrapper>
        )}
      </ShowsAndMoviesSectionWrapper>
    </Section>
  )
}

export default ShowsAndMoviesSection
