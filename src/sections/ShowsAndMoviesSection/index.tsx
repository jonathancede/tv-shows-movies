"use client"

import { useState } from "react"
import Section from "@/components/Sections"
import SubsectionSelector, { SubsectionsType } from "@/components/SubsectionSelector"
import Input from "@/components/Input"
import { ShowsAndMoviesSectionWrapper } from "./styles"

const SUBSECTIONS_IDS = {
  TV_SHOWS: "tv_shows_1",
  MOVIES: "movies_2",
}

const ShowsAndMoviesSection: React.FC = () => {
  const [subsectionSelected, setsubsectionSelected] = useState<String>(SUBSECTIONS_IDS.TV_SHOWS)
  const placeHolderInput = subsectionSelected === SUBSECTIONS_IDS.TV_SHOWS ? "Search for TV shows" : "Search for movies"

  const sections: Array<SubsectionsType> = [
    { id: SUBSECTIONS_IDS.TV_SHOWS, label: "TV Shows", onClick: () => setsubsectionSelected(SUBSECTIONS_IDS.TV_SHOWS) },
    { id: SUBSECTIONS_IDS.MOVIES, label: "Movies", onClick: () => setsubsectionSelected(SUBSECTIONS_IDS.MOVIES) },
  ]

  return (
    <Section>
      <ShowsAndMoviesSectionWrapper>
        <SubsectionSelector sections={sections} selected={subsectionSelected} />
        <Input iconType="search" variant="large" type="text" placeholder={placeHolderInput} />
        <div>Listado</div>
      </ShowsAndMoviesSectionWrapper>
    </Section>
  )
}

export default ShowsAndMoviesSection
